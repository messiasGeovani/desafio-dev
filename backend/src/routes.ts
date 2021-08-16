import { Router } from "express";

export default class Routes {
  public routes;

  constructor() {
    this.routes = Router();

    this.setStoreRoutes();
  }

  private setStoreRoutes() {
    const { routes } = this;

    routes.get("/store", (req, res) => {
      return res.send("Ola");
    });
  }
}
