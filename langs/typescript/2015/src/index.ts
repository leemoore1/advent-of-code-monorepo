import logger from "../../lib/logging";
import type { Logger } from "../../lib/types";
import day01 from "./d_01";
import day02 from "./d_02";

const logs: Logger = logger;

const YEAR: string = "2015";

logs.printGreeting(YEAR);
logs.printAnswers({ ...day01 });
logs.printAnswers({ ...day02 });
