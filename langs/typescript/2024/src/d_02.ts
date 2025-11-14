import { calculateDistance, getFileContent } from './utils';

const isSafeReport = (array: Array<number>): boolean => {
  const MAX_DISTANCE = 3;

  const asc: boolean = array.slice(1).every((val: number, index: number) => {
    const distance = calculateDistance(val, array[index]);
    return val > array[index] && distance <= MAX_DISTANCE;
  });

  const desc: boolean = array.slice(1).every((val, index) => {
    const distance = calculateDistance(val, array[index]);
    return val < array[index] && distance <= MAX_DISTANCE;
  });

  const isSorted: boolean = asc || desc;

  return isSorted;
};

const countSafeReports = (filePath: string, allowError?: boolean): number => {
  const content = getFileContent(filePath);
  const safeReports: Array<Array<number>> = [];
  const lines: Array<string> = content.split(RegExp(/\n/));

  lines.forEach((line: string): void => {
    const values: Array<number> = line
      .split(RegExp(/\s/))
      .map((s: string) => parseInt(s));

    const isSafe: boolean = isSafeReport(values);

    if (isSafe && !safeReports.includes(values)) {
      safeReports.push(values);
    } else {
      if (allowError) {
        values.forEach(
          (_value: number, index: number, array: Array<number>) => {
            const slice: Array<number> = array.filter(
              (v: number, i: number) => {
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

export { countSafeReports, isSafeReport };
