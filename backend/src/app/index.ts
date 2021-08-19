import * as express from "express";
import * as fileUpload from "express-fileupload";
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
    this.express.use(fileUpload());
  }

  private setRoutes() {
    this.express.use(new Routes().routes);
  }
}
