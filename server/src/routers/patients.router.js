import express from "express";
import PatientsController from "../controllers/patients.controller.js";
import {
  deletePatientValidator,
  getPatientValidator,
  newPatientValidator,
} from "../validators/patietns.js";

const controller = new PatientsController();
const router = express.Router();

router.get("/patients", controller.getPatients);
router.get("/patient/:id", getPatientValidator, controller.getPatientById);
router.get("/info", controller.getGeneralInfo);
router.post("/patients", newPatientValidator, controller.createNewPatient);
router.delete(
  "/patients/:id",
  deletePatientValidator,
  controller.deletePatient
);

export default router;
