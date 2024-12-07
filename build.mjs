import municipalities from "./municipalities.json" with { type: "json" };
import parseInputCsv from "./src/parseInputCsv.mjs";
import transformCsvData from "./src/transformCsvData.mjs";
import writeOutputFile from "./src/writeOutputFile.mjs";

const nameFromCode = (municipalityCode) => municipalities[municipalityCode];

const onlyNames = function onlyNames(data) {
  const dataWithNames = {};

  Object.keys(data).forEach((municipalityCode) => {
    const municipalityName = nameFromCode(municipalityCode);

    dataWithNames[municipalityName] = data[municipalityCode].map(
      (neighborCode) => nameFromCode(neighborCode),
    );
  });

  return dataWithNames;
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
  JSON.stringify(onlyNames(data)),
);
writeOutputFile("neighboring-municipalities-name-code.txt", nameCodesString);

console.log("-------");
console.log("Copy and paste from console to README.md");
console.log("-------");

sorted.forEach((municipalityCode) => {
  const neighborCodes = data[municipalityCode];

  const neighborsString = neighborCodes
    .map((neighborCode) => nameFromCode(neighborCode))
    .join(", ");

  console.log(`${municipalities[municipalityCode]} | ${neighborsString}`);
});
