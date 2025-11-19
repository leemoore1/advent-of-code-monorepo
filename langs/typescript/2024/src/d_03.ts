import { getTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";

export const searchForMultiplications = (content: string) => {
  const expression: RegExp = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)/, "g");
  const matches = [...content.matchAll(expression)];

  return matches;
};

export const sumOfMultiplications = (
  input: string,
  _enabled: boolean = false,
): number => {
  const m = searchForMultiplications(input);

  let product: number = 0;

  const splitVals = m.map((value: RegExpExecArray) =>
    value[0].replace("mul(", "").replace(")", ""),
  );

  splitVals.forEach((value) => {
    // console.log(value);
    const [a, b] = value.split(",").map((v) => parseInt(v, 10));
    product += Math.imul(a, b);
  });

  return product;
};

const input: string = getTaskInput("2024", "03.txt");

export default {
  day: 3,
  p1: sumOfMultiplications(input),
  p2: 0,
} as Task;
