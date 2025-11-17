export const traverse = (char: string) => {
  if (char === "(") return +1;
  if (char === ")") return -1;
  throw new Error(`Input character "${char}" not recognised.`);
};

export const followDirections = (input: string): number => {
  let level: number = 0;
  const chars: Array<string> = input.split("");

  chars.forEach((char: string) => {
    level += traverse(char);
  });

  return level;
};
