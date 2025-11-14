import { INPUTS_DIR_2024 } from "../../lib/variables";
import { getDistance, getSimilarityScore } from "./d_01";
import { countSafeReports } from "./d_02";
import { sumOfMultiplications } from "./d_03";

const welcome = (year: number): void => {
  console.log(`Welcome to Advent of Code ${year}!`);
  console.log("-------------------------------");
  console.log();
};

export default welcome;

const showAnswers = (day: number, answers: Array<unknown>): void => {
  const [ans1, ans2] = answers;
  console.log(`Day ${day}`);
  console.log("--------------------");
  console.log(`Answer #1: ${ans1}`);
  console.log(`Answer #2: ${ans2}`);
  console.log();
};

const day1 = (): void => {
  const input: string = `${INPUTS_DIR_2024}/d_01.txt`;
  const distance = getDistance(input);
  const similarity: number = getSimilarityScore(input);
  showAnswers(1, [distance, similarity]);
};

const day2 = (): void => {
  const input: string = `${INPUTS_DIR_2024}/d_02.txt`;
  const safeReportsWithoutErrors: number = countSafeReports(input);
  const safeReportsWithOneError: number = countSafeReports(input, true);
  showAnswers(2, [safeReportsWithoutErrors, safeReportsWithOneError]);
};

const day3 = (): void => {
  const input: string = `${INPUTS_DIR_2024}/d_03.txt`;
  const sum: number = sumOfMultiplications(input);
  // const safeReportsWithOneError: number = sumOfMultiplications(input);
  showAnswers(3, [sum, 0]);
};

welcome(2024);
day1();
day2();
day3();
