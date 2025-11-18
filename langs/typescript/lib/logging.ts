import type { Answers } from "./types";

const printGreeting = (year: string): void => {
  console.info(`Welcome to Advent of Code ${year}!`);
  console.info("-------------------------------");
  console.info();
};

const printAnswers = (day: number, answers: Answers): void => {
  const { partOne, partTwo } = answers;

  console.info(`Day ${day}`);
  console.info("--------------------");
  console.info(`Ans. Part #1: ${partOne}`);
  console.info(`Ans. Part #2: ${partTwo}`);
  console.info();
};

export type Logger = {
  printGreeting: (year: string) => void;
  printAnswers: (day: number, answers: Answers) => void;
};

const logger = {
  printGreeting,
  printAnswers,
};

export default logger;
