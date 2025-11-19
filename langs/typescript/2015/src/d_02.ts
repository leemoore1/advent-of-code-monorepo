import { getTaskInput } from "../../lib/getTaskInput";
import type { Task } from "../../lib/types";

const input: string = getTaskInput("2015", "02.txt");

export default {
  day: 2,
  p1: 0,
  p2: 0,
} as Task;
