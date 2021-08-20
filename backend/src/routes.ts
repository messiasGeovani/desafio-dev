import { Router } from "express";
import { StoreController } from "./app/controllers/StoreController";
import { TransactionController } from "./app/controllers/TransactionController";

export default class Routes {
  public routes;
  private storeController = new StoreController();
  private transactionController = new TransactionController();

  constructor() {
    this.routes = Router();

    this.setStoreRoutes();
    this.setTransactionRoutes();
  }

  private setStoreRoutes() {
    const { routes } = this;

    routes.get("/store", (req, res) => {
      this.storeController.index(req, res);
    });

    routes.get("/store/:name", (req, res) => {
      this.storeController.search(req, res);
    });
  }

  private setTransactionRoutes() {
    const { routes } = this;

    routes.get("/transactions", (req, res) => {
      this.transactionController.index(req, res);
    });

    routes.get("/transactions/:storeId", (req, res) => {
      this.transactionController.indexByStore(req, res);
    });

    routes.post("/transactions", (req, res) => {
      this.transactionController.create(req, res);
    });
  }
}
