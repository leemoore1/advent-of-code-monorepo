import type { Logger, Task } from "./types";

const printGreeting = (year: string): void => {
  console.info(`Welcome to Advent of Code ${year}!`);
  console.info("-------------------------------");
  console.info();
};

const printAnswers = (task: Task): void => {
  const { day, p1, p2 } = task;

  console.info(`Day ${day}`);
  console.info("------");
  console.info(`Ans. Part #1: ${p1}`);
  console.info(`Ans. Part #2: ${p2}`);
  console.info();
};

export default {
  printGreeting,
  printAnswers,
} as Logger;
