import { parse } from "csv-parse/sync";
import fs from "fs";

const parseInputCsv = () => {
  const csvContents = fs.readFileSync(
    new URL("../input/input.csv", import.meta.url),
    "utf8",
  );

  const data = parse(csvContents, {
    columns: true,
    trim: true,
  });

  return data;
};

export default parseInputCsv;
