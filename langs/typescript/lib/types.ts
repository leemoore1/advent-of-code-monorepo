export type ArrayTestCase = {
  array: Array<number>;
  expected: boolean | number;
};

export type Task = {
  day: string;
  p1: number;
  p2: number;
};

export type Logger = {
  printGreeting: (year: string) => void;
  printAnswers: (answers: Task) => void;
};

// export type Task = {
//   input: string;
//   answers?: Answers;
// };

// export type Tasks = Array<Task>;

export type TestSuite = Array<ArrayTestCase>;
