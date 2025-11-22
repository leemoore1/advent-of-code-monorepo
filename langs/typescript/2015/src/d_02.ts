import { getIterableTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";

export const getSurfaceArea = (l: number, w: number, h: number): number => {
  return 2 * (l * w) + 2 * (w * h) + 2 * (h * l);
};

export const getShortestSides = (
  l: number,
  w: number,
  h: number,
): Array<number> => {
  const dimensions: Array<number> = [l, w, h].sort(
    (a: number, b: number) => a - b,
  );
  const [a, b]: Array<number> = dimensions.slice(0, 2);
  return [a, b];
};

export const getAreaOfShortestSides = (l: number, w: number, h: number) => {
  const [a, b]: Array<number> = getShortestSides(l, w, h);
  return a * b;
};

export const getDimensions = (input: string): Array<number> => {
  const split: Array<string> = input.split("x");

  if (split.length !== 3) {
    throw new Error("Error: incorrect size reading wrapping paper array");
  }

  return split.map((v: string) => parseInt(v, 10));
};

export const calcPaperReq = (input: string): number => {
  const [l, w, h]: Array<number> = getDimensions(input);

  return getSurfaceArea(l, w, h) + getAreaOfShortestSides(l, w, h);
};

export const calcRibbonReq = (input: string): number => {
  const [l, w, h]: Array<number> = getDimensions(input);
  const [a, b]: Array<number> = getShortestSides(l, w, h);
  const rLen: number = 2 * a + 2 * b;
  const bLen: number = l * w * h;

  return rLen + bLen;
};

export const partOne = (iterable: Array<string>) => {
  let total: number = 0;

  iterable.forEach((line: string) => {
    total += calcPaperReq(line);
  });

  return total;
};

export const partTwo = (iterable: Array<string>) => {
  let total: number = 0;

  iterable.forEach((line: string) => {
    total += calcRibbonReq(line);
  });

  return total;
};

const input: Array<string> = getIterableTaskInput("2015", "02.txt");

export default {
  day: 2,
  p1: partOne(input),
  p2: partTwo(input),
} as Task;
