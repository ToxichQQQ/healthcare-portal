import { ApplicationError } from "./errors.js";
import { HttpStatusCodes, ResponseMessages } from "../contants/contants.js";

// eslint-disable-next-line
export function globalErrorHandler(error, req, res, next) {
  if (error instanceof ApplicationError) {
    return res
      .status(error.status)
      .json({ status: ResponseMessages.ERROR, message: error.message });
  }

  res
    .status(HttpStatusCodes.SERVER_ERROR)
    .json({ status: ResponseMessages.ERROR, message: "Internal Server Error" });
}
