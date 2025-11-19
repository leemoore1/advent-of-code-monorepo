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
