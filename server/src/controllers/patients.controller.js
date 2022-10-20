import { HttpStatusCodes, ResponseMessages } from "../contants/contants.js";
import PatientsService from "../services/patientsServices.js";

export default class PatientsController {
  async createNewPatient(req, res, next) {
    try {
      const { fullName, sex, medications, wellbeing, symptoms, adherence } =
        req.body;

      const result = await PatientsService.createNewPatient(
        fullName,
        sex,
        medications,
        wellbeing,
        symptoms,
        adherence
      );

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getPatients(req, res, next) {
    try {
      const result = await PatientsService.getPatients();

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getPatientById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await PatientsService.getPatientById(id);

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getGeneralInfo(req, res, next) {
    try {
      const result = await PatientsService.getGeneralInfo();

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async deletePatient(req, res, next) {
    try {
      const { id } = req.params;

      const result = await PatientsService.deletePatient(id);

      return res.status(HttpStatusCodes.SUCCESS).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}
