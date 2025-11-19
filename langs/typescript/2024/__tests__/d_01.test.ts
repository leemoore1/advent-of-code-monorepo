import { getTaskInput } from "../../lib/getTaskInput";
import type { ArrayTestCase } from "../../lib/types";
import { calculateDistance } from "../../lib/utils";
import { getDistance, getSimilarityScore } from "../src/d_01";

describe("Day 1", () => {
  describe("Calling calculateDistance()...", () => {
    const tests: Array<ArrayTestCase> = [
      { array: [1, 3], expected: 2 },
      { array: [3, 1], expected: 2 },
      { array: [4, 2], expected: 2 },
      { array: [3, 5], expected: 2 },
      { array: [-1, -3], expected: 2 },
      { array: [-3, -1], expected: 2 },
    ];

    tests.forEach((test: ArrayTestCase) => {
      it(`should return ${2} when the integers are (${test.array.join(", ")})`, () => {
        const [a, b] = test.array;
        const received = calculateDistance(a, b);
        expect(received).toEqual(test.expected);
      });
    });
  });

  describe("Calling getDistance()...", () => {
    it("should throw an error when provided with bad sample data", async () => {
      const input: string = getTaskInput("2024", "d_01_test_bad.txt", true);
      expect(async () => {
        getDistance(input);
      }).rejects.toThrow(Error);
    });

    it("should return 11 when passing test data", () => {
      const expected = 11;
      const input: string = getTaskInput("2024", "d_01_test.txt", true);
      const received = getDistance(input);

      expect(received).toEqual(expected);
    });
  });

  describe("Calling getSimilarityScore()...", () => {
    it("should return 32 when passing test data", () => {
      const input: string = getTaskInput("2024", "d_01_test.txt", true);
      const expected = 31;
      const received = getSimilarityScore(input);
      expect(received).toEqual(expected);
    });
  });
});
