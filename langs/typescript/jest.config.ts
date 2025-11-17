import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "node",
  // roots: ["<rootDir>/src", "<rootDir>/tests"],
  testMatch: ["**/__tests__/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".spec.ts": "tsx",
        },
      },
    ],
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

export default config;
