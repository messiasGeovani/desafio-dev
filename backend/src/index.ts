import "reflect-metadata";
import { createConnection } from "typeorm";
import App from "./app";

createConnection()
  .then(() => {
    const app = new App().express;
    const port = process.env.PORT || 3000;

    app.listen(port, () => console.log(`server running on ${port}...`));
  })
  .catch((err) => console.log("Database connection error", err));
