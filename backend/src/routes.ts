import { Router } from "express";
import { StoreController } from "./app/controllers/StoreController";

export default class Routes {
  public routes;
  private storeController = new StoreController();

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
}
