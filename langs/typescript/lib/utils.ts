import { readFileSync } from "node:fs";

export const getFileContent = (filePath: string): string => {
  return readFileSync(filePath, { encoding: "utf8" });
};
