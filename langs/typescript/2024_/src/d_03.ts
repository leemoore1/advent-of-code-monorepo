import { getFileContent } from './utils';

const searchForMultiplications = (content: string) => {
  const expression: RegExp = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)/, 'g');
  const matches = [...content.matchAll(expression)];

  return matches;
};

const sumOfMultiplications = (filePath: string, enabled?: boolean): number => {
  const content: string = getFileContent(filePath);
  const m = searchForMultiplications(content);

  let product: number = 0;

  const splitVals = m.map((value: RegExpExecArray) =>
    value[0].replace('mul(', '').replace(')', ''),
  );

  splitVals.forEach((value) => {
    // console.log(value);
    const [a, b] = value.split(',').map((v) => parseInt(v));
    product += Math.imul(a, b);
  });

  return product;
};

export { searchForMultiplications, sumOfMultiplications };
