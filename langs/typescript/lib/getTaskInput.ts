import { getFileContent } from "./utils";
import { inputsDir } from "./variables";

export const getTaskInput = (year: string, day: string): string => {
  return getFileContent(`${inputsDir}/${year}/${day}.txt`);
};
