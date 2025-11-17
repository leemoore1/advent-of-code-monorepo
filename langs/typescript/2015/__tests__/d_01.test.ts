import "@jest/globals";
import { followDirections, traverse } from "../src/d_01";

type Test = {
  input: string;
  expected: number;
};

describe("01/12/2015", () => {
  describe("calling traverse", () => {
    it("should throw an error when passed invalid characters", () => {
      const invalid = "!@£$%^&*";
      const tests: Array<string> = invalid.split("");

      tests.forEach((char: string) => {
        expect(() => {
          traverse(char);
        }).toThrow();
      });
    });
  });

  describe("calling traverseBuilding", () => {
    const tests: Array<Test> = [
      { input: "(())", expected: 0 },
      { input: "()()", expected: 0 },
      { input: "(((", expected: 3 },
      { input: "(()(()(", expected: 3 },
      { input: "))(((((", expected: 3 },
      { input: "())", expected: -1 },
      { input: "))(", expected: -1 },
      { input: ")))", expected: -3 },
      { input: ")())())", expected: -3 },
    ];

    tests.forEach((test: Test) => {
      it(`should return ${test.expected} when the input is ${test.input}`, () => {
        const result: number = followDirections(test.input);
        expect(result).toEqual(test.expected);
      });
    });
  });
});
