import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";

createConnection()
  .then(() => {
    const app = new App().express;
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`server running on ${port}...`));
  })
  .catch((error) => console.log(error));
