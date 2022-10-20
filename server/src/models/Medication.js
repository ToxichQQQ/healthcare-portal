import { Schema, model } from "mongoose";

const MedicationSchema = new Schema(
  {
    medication_name: { type: String, required: true },
    medication_dose: { type: String, required: true },
  },
  { _id: false }
);

export const Medication = model("Medication", MedicationSchema);
