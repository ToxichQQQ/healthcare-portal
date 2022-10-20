import express from "express";
import patientsRouter from "./routers/patients.router.js";
import "./database/connection.js";
import { config } from "./config/config.js";
import { globalErrorHandler } from "./errors/globalHandlerError.js";
import cors from "cors";

export default class Server {
  constructor() {
    this.app = express();
    this.applySettings();
    this.applyRouters();
    this.globalErrorHandler();
  }

  startApp() {
    this.app.listen(config.PORT, () => {
      console.log("The server is listening on port: ", config.PORT);
    });
  }

  applySettings() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  applyRouters() {
    this.app.use("/", patientsRouter);
  }

  globalErrorHandler() {
    this.app.use(globalErrorHandler);
  }
}
