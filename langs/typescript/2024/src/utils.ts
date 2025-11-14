import { readFileSync } from 'fs';

const getFileContent = (filePath: string) => {
  return readFileSync(filePath, { encoding: 'utf8' });
};

const calculateDistance = (a: number, b: number): number => {
  return a > b ? a - b : b - a;
};

export { calculateDistance, getFileContent };
