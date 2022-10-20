import { Schema, model } from "mongoose";

const WellbeingSchema = new Schema(
  {
    date: { type: Date, required: true },
    day: { type: String },
    day_wellbeing: { type: Number, required: true },
    day_mood: { type: Number, required: true },
    symptoms: { type: Array, ref: "Symptom" },
  },
  { _id: false }
);

export const Wellbeing = model("Wellbeing", WellbeingSchema);
