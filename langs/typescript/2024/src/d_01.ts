import { calculateDistance, getFileContent } from './utils';

type SplitArray = {
  listL: Array<number>;
  listR: Array<number>;
};

const splitIntoArrays = (filePath: string): SplitArray => {
  const content = getFileContent(filePath);

  const listL: Array<number> = [];
  const listR: Array<number> = [];

  const lines: Array<string> = content.split(RegExp(/\n/));
  lines.forEach((line: string) => {
    const values: Array<number> = line
      .split(RegExp(/ {3}/))
      .map((e) => parseInt(e));

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

const getDistance = (filePath: string): number => {
  const { listL, listR } = splitIntoArrays(filePath);

  let total: number = 0;

  listL.forEach((valueL, index): void => {
    const valueR = listR[index];
    const distance = calculateDistance(valueL, valueR);
    total += distance;
  });

  return total;
};

const getSimilarityScore = (filePath: string): number => {
  let score = 0;

  const { listL, listR } = splitIntoArrays(filePath);

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

export { getDistance, getSimilarityScore };
