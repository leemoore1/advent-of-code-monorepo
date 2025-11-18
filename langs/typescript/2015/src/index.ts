import type { Logger } from "../../lib/logging";
import logger from "../../lib/logging";
import { getFileContent } from "../../lib/utils";
import { INPUTS_DIR } from "../../lib/variables";
import { followDirections } from "./d_01";

const logs: Logger = logger;

const YEAR: string = "2015";
const inputDir: string = `${INPUTS_DIR}/${YEAR}`;

logs.printGreeting("2015");

const d1Content: string = getFileContent(`${inputDir}/01.txt`);
const d1PartOne: number = followDirections(d1Content);
logs.printAnswers(1, { partOne: d1PartOne, partTwo: 0 });
