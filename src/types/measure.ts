import { unitsMeasurementEnum } from "./../enum/unitsMeasurement";

export type MeasureType = {
  value: number;
  unit: keyof typeof unitsMeasurementEnum;
};
