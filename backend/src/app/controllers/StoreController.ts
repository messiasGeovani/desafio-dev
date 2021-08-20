import { Request, Response } from "express";
import { getCustomRepository, Like } from "typeorm";
import { IStoreDTO } from "../dtos/IStoreDTO";
import { StoreRepository } from "../repositories/StoreRepository";

export class StoreController {
  private storeRepository = getCustomRepository(StoreRepository);

  public async create(req: Request, res: Response) {
    const isValidStore = this.validateFields(req.body);

    if (!isValidStore) {
      return res.status(400).json({
        message: "invalid fields",
      });
    }

    await this.storeRepository.save(req.body);

    return res.json({
      message: "store created",
    });
  }

  public async index(req: Request, res: Response) {
    const storeList = await this.storeRepository.find();

    return res.json(storeList);
  }

  public async find(req: Request, res: Response) {
    const { id } = req.params;

    const store = await this.storeRepository.findOne(id);

    return res.json(store);
  }

  public async search(req: Request, res: Response) {
    const { name } = req.params;

    const storeList = await this.storeRepository.find({
      where: {
        name: Like(`%${name.toUpperCase()}%`),
      },
    });

    return res.json(storeList);
  }

  private validateFields(store: IStoreDTO) {
    if (!store.name || !store.owner) {
      return false;
    }

    return true;
  }
}
