import { Response } from "express";
import { getCustomRepository } from "typeorm";
import { StoreRepository } from "../repositories/StoreRepository";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { normalizeStoreData } from "../utils/normalize";
import { parseTransactionData } from "../utils/parseTransactionData";

export class TransactionServices {
  private transactionRepository = getCustomRepository(TransactionRepository);
  private storeRepository = getCustomRepository(StoreRepository);

  async save(document, res: Response) {
    const text = document.data.toString("utf8");
    const parsedData = parseTransactionData(text);

    if (!parsedData.length) {
      return res.status(412).json({
        message: "the file has no transaction data",
      });
    }

    const normalizedStoreList = normalizeStoreData(
      parsedData.map(({ store }) => store)
    );

    const findedStoreList = await Promise.all(
      normalizedStoreList.map(({ name, owner }) =>
        this.storeRepository.findOne({
          where: { name, owner },
        })
      )
    );

    const savedStores = await Promise.all(
      findedStoreList.map((store, index) => {
        if (!store) {
          return this.storeRepository.save(normalizedStoreList[index]);
        }
        return store;
      })
    );

    const savedTransactions = await Promise.all(
      parsedData.map((data) =>
        this.transactionRepository.save({
          ...data,
          store: savedStores.find(
            ({ name, owner }) =>
              name === data.store.name && owner === data.store.owner
          ),
        })
      )
    );

    savedStores.map((store) =>
      this.storeRepository.update(store.id, {
        ...store,
        transactions: Promise.resolve(
          savedTransactions
            .filter((transaction) => transaction.store.id === store.id)
            .map(({ store: _, ...transaction }) => transaction)
        ),
      })
    );

    return res.json({
      message: "transactions saved",
    });
  }
}
