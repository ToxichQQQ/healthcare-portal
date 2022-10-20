import { ValidationError } from "../errors/errors.js";
import { HttpStatusCodes } from "../contants/contants.js";

export function newPatientValidator(req, res, next) {
  const { fullName, sex, adherence } = req.body;

  try {
    if (!fullName || !adherence || !sex) {
      throw new ValidationError(
        HttpStatusCodes.BAD_REQUEST,
        "FullName,sex and adherence can't be empty"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}

export function deletePatientValidator(req, res, next) {
  const { id } = req.params;

  try {
    if (!id) {
      throw new ValidationError(
        HttpStatusCodes.BAD_REQUEST,
        "Patient ID is required"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}

export function getPatientValidator(req, res, next) {
  const { id } = req.params;

  try {
    if (!id) {
      throw new ValidationError(
        HttpStatusCodes.BAD_REQUEST,
        "Patient ID is required"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
}
