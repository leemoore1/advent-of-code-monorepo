import { readFileSync } from "node:fs";

export const getFileContent = (filePath: string): string => {
  return readFileSync(filePath, { encoding: "utf8" });
};

export const calculateDistance = (a: number, b: number): number => {
  return a > b ? a - b : b - a;
};
