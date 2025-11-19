import { getTaskInput } from "../../lib/getTaskInput";
import { searchForMultiplications, sumOfMultiplications } from "../src/d_03";

describe("Day 3", () => {
  const input: string = getTaskInput("2024", "d_03_test.txt", true);
  describe("Calling searchForMultiplications()...", () => {
    it("should return an array when passing test data", () => {
      const received: Array<RegExpExecArray> = searchForMultiplications(input);

      expect(received).toBeInstanceOf(Array<RegExpExecArray>);
      expect(received.length).toEqual(4);
    });

    it("...of length 4", () => {
      const received: Array<RegExpExecArray> = searchForMultiplications(input);

      expect(received.length).toEqual(4);
    });
  });

  describe("Calling sumOfMultiplications()...", () => {
    it("should return 161, for part one, when passing test data", () => {
      const received = sumOfMultiplications(input);
      expect(received).toEqual(161);
    });
    // it("should return 48, for part two, when passing test data", () => {
    //   const received = sumOfMultiplications(
    //     `${SAMPLES_DIR_2024}/d_03_test.txt`,
    //     true,
    //   );
    //   expect(received).toEqual(48);
    // });
  });
});
