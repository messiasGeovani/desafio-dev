import { Request, Response } from "express";

    const store = await this.storeRepository.save(req.body);

    return res.json(store);
  }

  private validateFields(store: IStoreDTO) {
    if (!store.name || !store.owner) {
      return false;
    }

    return true;
  }
}
