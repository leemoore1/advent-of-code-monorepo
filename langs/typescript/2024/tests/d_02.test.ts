import { INPUTS_DIR_2024, SAMPLES_DIR_2024 } from "../../lib/variables";
import { countSafeReports, isSafeReport } from "../src/d_02";
import type { ArrayTestCase } from "../src/types";

describe("Day 2", () => {
  describe("Calling isSafeReport()...", () => {
    const tests: Array<ArrayTestCase> = [
      { array: [7, 6, 4, 2, 1], expected: true },
      { array: [1, 2, 7, 8, 9], expected: false },
      { array: [9, 7, 6, 2, 1], expected: false },
      { array: [1, 3, 2, 4, 5], expected: false },
      { array: [8, 6, 4, 4, 1], expected: false },
      { array: [1, 3, 6, 7, 9], expected: true },
    ];

    tests.forEach((testCase: ArrayTestCase) => {
      it(`should return ${testCase.expected} the array contains [${testCase.array.join(", ")}]`, () => {
        const received: boolean = isSafeReport(testCase.array);
        expect(received).toEqual(testCase.expected);
      });
    });
  });

  describe("Calling getSafeReportCount()...", () => {
    it("should return 2 when passing test data", () => {
      const received = countSafeReports(`${SAMPLES_DIR_2024}/d_02_test.txt`);
      expect(received).toEqual(2);
    });
  });

  describe("Calling getSafeReportCount()...", () => {
    it("should return 4 when passing test data", () => {
      const received = countSafeReports(
        `${SAMPLES_DIR_2024}/d_02_test.txt`,
        true,
      );
      expect(received).toEqual(4);
    });

    it("should return 5 when passing extended test data", () => {
      const received = countSafeReports(
        `${SAMPLES_DIR_2024}/d_02_test_extended.txt`,
        true,
      );
      expect(received).toEqual(5);
    });

    it("should return 1 when passing test data with repeated values", () => {
      const received = countSafeReports(
        `${SAMPLES_DIR_2024}/d_02_test_repeating_num.txt`,
        true,
      );
      expect(received).toEqual(1);
    });
  });

  describe("Calling getSafeReportCount()...", () => {
    it("should return 252 for part one", () => {
      const received = countSafeReports(`${INPUTS_DIR_2024}/d_02.txt`);
      expect(received).toEqual(252);
    });

    it("should return 324 for part two", () => {
      const received = countSafeReports(`${INPUTS_DIR_2024}/d_02.txt`, true);
      expect(received).toEqual(324);
    });
  });
});
