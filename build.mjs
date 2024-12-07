import { parse } from "csv-parse/sync";
import fs from "fs";

import municipalities from "./municipalities.json" with { type: "json"}

const parseInputCsv = function parseInputCsv() {
  const csvContents = fs.readFileSync(
    new URL("./input/input.csv", import.meta.url),
    "utf8"
  );

  const data = parse(csvContents, {
    columns: true,
    trim: true,
  });

  return data;
};

const transformCsvData = function (csvData) {
  const data = {};

  csvData.forEach(({ KnKod: municipalityCode, Neighbors: neighbors }) => {
    const transformedNeighbors = neighbors
      .split(", ")
      .filter((neighbor) => neighbor !== municipalityCode)
      .sort();

    data[municipalityCode] = transformedNeighbors;
  });

  return data;
};

const nameFromCode = function (municipalityCode) {
  return municipalities[municipalityCode];
};

const onlyNames = function onlyNames(data) {
  const dataWithNames = {};

  Object.keys(data).forEach((municipalityCode) => {
    const municipalityName = nameFromCode(municipalityCode);

    dataWithNames[municipalityName] = data[municipalityCode].map(
      (neighborCode) => nameFromCode(neighborCode)
    );
  });

  return dataWithNames;
};

const writeOutputFile = function (filename, outputString) {
  fs.writeFileSync(`./output/${filename}`, outputString);
};

const csvData = parseInputCsv();
const data = transformCsvData(csvData);

const sorted = Object.keys(data).sort();

const nameCodesString = sorted
  .map((municipalityCode) => {
    const neighborCodes = data[municipalityCode];

    const neighborsString = neighborCodes
      .map((neighborCode) => `${nameFromCode(neighborCode)} (${neighborCode})`)
      .join(", ");

    return `${municipalities[municipalityCode]} (${municipalityCode}): ${neighborsString}`;
  })
  .join("\r\n");

writeOutputFile("neighboring-municipalities-code.json", JSON.stringify(data));
writeOutputFile(
  "neighboring-municipalities-name.json",
  JSON.stringify(onlyNames(data))
);
writeOutputFile("neighboring-municipalities-name-code.txt", nameCodesString);

console.log("-------");
console.log("Copy and paste from console to README.md");
console.log("-------");

sorted.map((municipalityCode) => {
  const neighborCodes = data[municipalityCode];

  const neighborsString = neighborCodes
    .map((neighborCode) => nameFromCode(neighborCode))
    .join(", ");

  console.log(`${municipalities[municipalityCode]} | ${neighborsString}`);
});
