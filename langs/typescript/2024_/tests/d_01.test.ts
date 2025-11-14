import { SAMPLES_DIR_2024 } from "../../lib/variables";
import { getDistance, getSimilarityScore } from "../src/d_01";
import type { ArrayTestCase } from "../src/types";
import { calculateDistance } from "../src/utils";

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
      expect(async () => {
        getDistance(`${SAMPLES_DIR_2024}/d_01_test_bad.txt`);
      }).rejects.toThrow(Error);
    });

    it("should return 11 when passing test data", () => {
      const expected = 11;
      const received = getDistance(`${SAMPLES_DIR_2024}/d_01_test.txt`);

      expect(received).toEqual(expected);
    });
  });

  describe("Calling getSimilarityScore()...", () => {
    it("should return 11 when passing test data", () => {
      const expected = 31;
      const received = getSimilarityScore(`${SAMPLES_DIR_2024}/d_01_test.txt`);
      expect(received).toEqual(expected);
    });
  });
});
