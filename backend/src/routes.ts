import { Router } from "express";
import { StoreController } from "./app/controllers/StoreController";

export default class Routes {
  public routes;
  private storeController = new StoreController();
  private transactionController = new TransactionController();

  constructor() {
    this.routes = Router();

    this.setStoreRoutes();
  }

  private setStoreRoutes() {
    const { routes } = this;

    routes.get("/store", (req, res) => {
      this.storeController.index(req, res);
    });
  }

  private setTransactionRoutes() {
    const { routes } = this;

    routes.get("/transactions", (req, res) => {
      this.transactionController.index(req, res);
    });
  }
}
