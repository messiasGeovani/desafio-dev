import { Router } from "express";
import { AuthController } from "./app/controllers/AuthController";
import { StoreController } from "./app/controllers/StoreController";
import { TransactionController } from "./app/controllers/TransactionController";
import { UserController } from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";

export default class Routes {
  public routes;
  private storeController = new StoreController();
  private transactionController = new TransactionController();
  private userController = new UserController();
  private authController = new AuthController();

  constructor() {
    this.routes = Router();

    this.setStoreRoutes();
    this.setTransactionRoutes();
    this.setUserRoutes();
    this.setAuthRoutes();
  }

  private setStoreRoutes() {
    const { routes } = this;

    routes.get("/store", authMiddleware, (req, res) => {
      this.storeController.index(req, res);
    });

    routes.get("/store/:name", authMiddleware, (req, res) => {
      this.storeController.search(req, res);
    });
  }

  private setTransactionRoutes() {
    const { routes } = this;

    routes.get("/transactions", authMiddleware, (req, res) => {
      this.transactionController.index(req, res);
    });

    routes.get("/transactions/:storeId", authMiddleware, (req, res) => {
      this.transactionController.indexByStore(req, res);
    });

    routes.post("/transactions", authMiddleware, (req, res) => {
      this.transactionController.create(req, res);
    });
  }

  private setUserRoutes() {
    const { routes } = this;

    routes.post("/users", (req, res) => {
      this.userController.create(req, res);
    });

    routes.get("/users", authMiddleware, (req, res) => {
      this.userController.index(req, res);
    });

    routes.get("/users/:id", authMiddleware, (req, res) => {
      this.userController.find(req, res);
    });
  }

  private setAuthRoutes() {
    const { routes } = this;

    routes.post("/auth", (req, res) => {
      this.authController.authenticate(req, res);
    });
  }
}
