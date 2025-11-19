import { getTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";
import { calculateDistance, getFileContent } from "../../lib/utils";

type SplitArray = {
  listL: Array<number>;
  listR: Array<number>;
};

const splitIntoArrays = (input: string): SplitArray => {
  const listL: Array<number> = [];
  const listR: Array<number> = [];

  const lines: Array<string> = input.split(RegExp(/\n/));
  lines.forEach((line: string) => {
    const values: Array<number> = line
      .split(RegExp(/ {3}/))
      .map((e) => parseInt(e, 10));

    if (values.length !== 2) {
      throw new Error(
        `Expected 2 values when splitting the line, got ${values.length} values.`,
      );
    }

    listL.push(values[0]);
    listR.push(values[1]);
  });

  listL.sort();
  listR.sort();

  return { listL, listR };
};

export const getDistance = (input: string): number => {
  const { listL, listR } = splitIntoArrays(input);

  let total: number = 0;

  listL.forEach((valueL, index): void => {
    const valueR = listR[index];
    const distance = calculateDistance(valueL, valueR);
    total += distance;
  });

  return total;
};

export const getSimilarityScore = (input: string): number => {
  let score = 0;

  const { listL, listR } = splitIntoArrays(input);

  listL.forEach((value: number) => {
    let count = 0;
    listR.forEach((v: number) => {
      if (value === v) {
        count++;
      }
    });

    score += value * count;
  });

  return score;
};

const day: string = "01";
const input: string = getTaskInput("2024", day);

export default {
  day,
  p1: getDistance(input),
  p2: getSimilarityScore(input),
} as Task;
