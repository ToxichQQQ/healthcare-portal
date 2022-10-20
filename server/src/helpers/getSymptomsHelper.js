import { MedicationColors, SymptomColors } from "../contants/contants.js";

export const getSymptomsHelper = (patients) => {
  let symptoms = new Map();
  let totalCount = 0;
  let arr = [];

  patients.map((patient) =>
    patient.wellbeing.map((day) => {
      day.symptoms.map((symptom) => {
        totalCount++;
        if (symptoms.has(symptom.name)) {
          symptoms.set(symptom.name, symptoms.get(symptom.name) + 1);
        } else {
          symptoms.set(symptom.name, 1);
        }
      });
    })
  );

  for (let [key, value] of symptoms) {
    console.log(key.replace(/\s/g, ""));
    arr = [
      ...arr,
      { name: key, value, color: SymptomColors[key.replace(/\s/g, "")] },
    ];
  }

  return { statistic: arr, totalCount };
};
