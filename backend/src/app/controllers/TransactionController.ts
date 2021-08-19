import dayjs = require("dayjs");
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ITransactionDTO } from "../dtos/ITransactionDTO";
import { TransactionRepository } from "../repositories/TransactionRepository";

export class TransactionController {
  private transactionRepository = getCustomRepository(TransactionRepository);

  public async create(req: Request, res: Response) {
    const isValidStore = this.validateFields(req.body);

    if (!isValidStore) {
      return res.status(400).json({
        message: "invalid fields",
      });
    }

    await this.transactionRepository.save(req.body);

    return res.json({
      message: "transaction saved",
    });
  }

  public async index(req: Request, res: Response) {
    const storeList = await this.transactionRepository.find();

    return res.json(storeList);
  }

  public async find(req: Request, res: Response) {
    const { id } = req.params;

    const transaction = await this.transactionRepository.findOne(id);

    return res.json(transaction);
  }

  public async indexByStore(req: Request, res: Response) {
    const { storeId } = req.params;

    if (!storeId) {
      return res.status(400).json({
        message: "store id is required",
      });
    }

    const transactions = await this.transactionRepository.find({
      where: {
        store: {
          id: storeId,
        },
      },
    });

    return res.json(transactions);
  }

  private validateFields(transaction: ITransactionDTO) {
    const { type, date, value, cpf, hour } = transaction;

    if (!type || !date || !value || !cpf || !hour) {
      return false;
    }

    if (typeof value !== "number") {
      return false;
    }

    if (!dayjs(date).isValid()) {
      return false;
    }

    return true;
  }
}
