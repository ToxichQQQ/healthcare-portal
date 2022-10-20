import { Schema, model } from "mongoose";

const SymptomSchema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
  },
  { _id: false }
);

export const Symptom = model("Symptom", SymptomSchema);
