import { unitsMeasurementEnum } from "@/enum/unitsMeasurement";
import { MeasureType } from "@/types/measure";

export function getUnitLabelByMeasureValue(
  measureValue: number,
  unit: MeasureType["unit"]
) {
  if (measureValue === 1) {
    return unitsMeasurementEnum[unit].label.singular;
  }
  return unitsMeasurementEnum[unit].label.plural;
}
