export interface IStaticticItem {
  name: string;
  value: number;
  color: string;
}

interface ISymptoms {
  name: string;
  status: string;
}

interface IDayState {
  date: string;
  day: string;
  day_mood: number;
  day_wellbeing: number;
  symptoms: ISymptoms[];
}

interface IMedication {
  medication_dose: string;
  medication_name: string;
}

export interface IStatistic {
  statistic: IStaticticItem[];
  totalCount: number;
}

export interface IPatient {
  _id: number;
  fullName: string;
  sex: string;
  adherence: number;
  symptoms: ISymptoms[];
  wellbeing: IDayState[];
  medications: IMedication[];
}

export interface IPortalData {
  femaleCount: number;
  maleCount: number;
  moodAvarage: number;
  wellbeingAvarage: number;
  patientsCount: number;
  reportedCount: number;
  medicationsStatistic: IStatistic;
  symptomsStatistic: IStatistic;
}
