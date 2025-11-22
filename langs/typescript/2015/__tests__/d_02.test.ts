import "@jest/globals";
import { getIterableTaskInput } from "../../lib/getTaskInput";
import {
  calcPaperReq,
  calcRibbonReq,
  getDimensions,
  partOne,
  partTwo,
} from "../src/d_02";

type Test = {
  input: string;
  expected: number;
};

describe("2015, Day 2", () => {
  describe("when getting dimensions for invalid input", () => {
    const tests: Array<string> = ["1x2x3x", "4x3x2x1", "1x3x3x7", "x9x21x16"];
    tests.forEach((badInput: string) => {
      it(`${badInput} should throw an error`, () => {
        expect(() => {
          getDimensions(badInput);
        }).toThrow();
      });
    });
  });
  describe("Part 1", () => {
    const tests: Array<Test> = [
      { input: "2x3x4", expected: 58 },
      { input: "1x1x10", expected: 43 },
    ];

    tests.forEach((test: Test) => {
      it(`should return ${test.expected} when the input is ${test.input}`, () => {
        const result: number = calcPaperReq(test.input);
        expect(result).toEqual(test.expected);
      });
    });

    it("should return a total 101 when passed samples as a file", () => {
      const input: Array<string> = getIterableTaskInput(
        "2015",
        "02_samples.txt",
        true,
      );
      const result: number = partOne(input);
      expect(result).toEqual(101);
    });

    it("should return a total 10902 when passed samples as a file", () => {
      const input: Array<string> = getIterableTaskInput(
        "2015",
        "02_samples_2.txt",
        true,
      );
      const result: number = partOne(input);
      expect(result).toEqual(10902);
    });

    it("should return a total 1588178 when passed the input file", () => {
      const input: Array<string> = getIterableTaskInput("2015", "02.txt");
      const result: number = partOne(input);
      expect(result).toEqual(1588178);
    });
  });

  describe("Part 2", () => {
    const tests: Array<Test> = [
      { input: "2x3x4", expected: 34 },
      { input: "1x1x10", expected: 14 },
    ];

    tests.forEach((test: Test) => {
      it(`should return ${test.expected} when the input is ${test.input}`, () => {
        const result: number = calcRibbonReq(test.input);
        expect(result).toEqual(test.expected);
      });
    });

    it("should return a total 3783758 when passed the input file", () => {
      const input: Array<string> = getIterableTaskInput("2015", "02.txt");
      const result: number = partTwo(input);
      expect(result).toEqual(3783758);
    });
  });
});
