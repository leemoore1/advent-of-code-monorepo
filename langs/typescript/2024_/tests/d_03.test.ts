import { SAMPLES_DIR_2024 } from "../../lib/variables";
import { searchForMultiplications, sumOfMultiplications } from "../src/d_03";
import { getFileContent } from "../src/utils";

describe("Day 3", () => {
  describe("Calling searchForMultiplications()...", () => {
    it("should return an array when passing test data", () => {
      const content: string = getFileContent(
        `${SAMPLES_DIR_2024}/d_03_test.txt`,
      );
      const received: Array<RegExpExecArray> =
        searchForMultiplications(content);

      expect(received).toBeInstanceOf(Array<RegExpExecArray>);
      expect(received.length).toEqual(4);
    });

    it("...of length 4", () => {
      const content: string = getFileContent(
        `${SAMPLES_DIR_2024}/d_03_test.txt`,
      );
      const received: Array<RegExpExecArray> =
        searchForMultiplications(content);

      expect(received.length).toEqual(4);
    });
  });

  describe("Calling sumOfMultiplications()...", () => {
    it("should return 161, for part one, when passing test data", () => {
      const received = sumOfMultiplications(
        `${SAMPLES_DIR_2024}/d_03_test.txt`,
      );
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
