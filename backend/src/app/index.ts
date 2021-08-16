import * as express from "express";
import Routes from "../routes";

export default class App {
  public express;

  constructor() {
    this.express = express();

    this.setup();
    this.setRoutes();
  }

  private setup() {
    this.express.use(express.json());
  }

  private setRoutes() {
    this.express.use(new Routes());
  }
}
