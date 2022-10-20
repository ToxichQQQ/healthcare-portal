import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connection = (() => {
  mongoose
    .connect(config.DATABASE_URL, {
      useNewUrlParser: true,
    })
    .catch((e) => {
      console.error("Server error: ", e);
      process.exit(1);
    });
})();
