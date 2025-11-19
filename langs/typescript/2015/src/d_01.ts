import { getTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";

export const traverse = (char: string) => {
  if (char === "(") return +1;
  if (char === ")") return -1;
  throw new Error(`Input character "${char}" not recognised.`);
};

export const followInstructions = (
  input: string,
  stopAtBasement: boolean = false,
): number => {
  let level: number = 0;
  const chars: Array<string> = input.split("");

  for (let index: number = 0; index < chars.length; index++) {
    const current: string = chars[index];

    if (stopAtBasement && level < 0) {
      return index;
    }

    level += traverse(current);
  }

  return level;
};

const day: string = "01";
const input: string = getTaskInput("2015", day);

export default {
  day,
  p1: followInstructions(input),
  p2: followInstructions(input, true),
} as Task;
