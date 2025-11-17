export type ArrayTestCase = {
  array: Array<number>;
  expected: boolean | number;
};

export type TestSuite = Array<ArrayTestCase>;
