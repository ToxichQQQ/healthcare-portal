import { MedicationColors } from "../contants/contants.js";

export const getMedicationsHelper = (patients) => {
  let medications = new Map();
  let totalCount = 0;
  let arr = [];

  patients.map((patient) =>
    patient.medications.map((medication) => {
      totalCount++;
      if (medications.has(medication.medication_name)) {
        medications.set(
          medication.medication_name,
          medications.get(medication.medication_name) + 1
        );
      } else {
        medications.set(medication.medication_name, 1);
      }
    })
  );

  for (let [key, value] of medications) {
    arr = [...arr, { name: key, value, color: MedicationColors[key.trim()] }];
  }

  return { statistic: arr, totalCount };
};
