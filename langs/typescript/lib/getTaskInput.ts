import { getFileContent } from "./utils";
import { inputsDir, samplesDir } from "./variables";

export const getTaskInput = (
  year: string,
  file: string,
  samples: boolean = false,
): string => {
  return samples
    ? getFileContent(`${samplesDir}/${year}/${file}`)
    : getFileContent(`${inputsDir}/${year}/${file}`);
};

export const getIterableTaskInput = (
  year: string,
  file: string,
  samples: boolean = false,
): Array<string> => {
  return getTaskInput(year, file, samples).split("\n");
};
