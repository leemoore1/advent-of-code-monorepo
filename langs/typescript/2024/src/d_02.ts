import { getTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";
import { calculateDistance } from "../../lib/utils";

export const isSafeReport = (array: Array<number>): boolean => {
  const MaxDistance = 3;

  const asc: boolean = array.slice(1).every((val: number, index: number) => {
    const distance = calculateDistance(val, array[index]);
    return val > array[index] && distance <= MaxDistance;
  });

  const desc: boolean = array.slice(1).every((val, index) => {
    const distance = calculateDistance(val, array[index]);
    return val < array[index] && distance <= MaxDistance;
  });

  const isSorted: boolean = asc || desc;

  return isSorted;
};

export const countSafeReports = (
  input: string,
  allowError: boolean = false,
): number => {
  const safeReports: Array<Array<number>> = [];
  const lines: Array<string> = input.split(RegExp(/\n/));

  lines.forEach((line: string): void => {
    const values: Array<number> = line
      .split(RegExp(/\s/))
      .map((s: string) => parseInt(s, 10));

    const isSafe: boolean = isSafeReport(values);

    if (isSafe && !safeReports.includes(values)) {
      safeReports.push(values);
    } else {
      if (allowError) {
        values.forEach(
          (_value: number, index: number, array: Array<number>) => {
            const slice: Array<number> = array.filter(
              (_v: number, i: number) => {
                return index !== i;
              },
            );
            const isSafe = isSafeReport(slice);

            if (isSafe && !safeReports.includes(values)) {
              safeReports.push(values);
            }
          },
        );
      }
    }
  });

  return safeReports.length;
};

const input: string = getTaskInput("2024", "02.txt");

export default {
  day: 2,
  p1: countSafeReports(input),
  p2: countSafeReports(input, true),
} as Task;
