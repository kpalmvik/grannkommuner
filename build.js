const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const municipalities = require('./municipalities');

const parseInputCsv = function parseInputCsv() {
  const csvContents = fs.readFileSync(__dirname + '/input/input.csv', 'utf8');

  const data = parse(csvContents, {
    columns: true,
    trim: true,
 });

  return data;
};

const transformCsvData = function(csvData) {
  const data = {};

  csvData.forEach(({ KnKod: municipalityCode, Neighbors: neighbors }) => {
      const transformedNeighbors = neighbors
        .split(", ")
        .filter((neighbor => neighbor !== municipalityCode))
        .sort()

      data[municipalityCode] = transformedNeighbors;
  });

  return data;
};

const nameFromCode = function (municipalityCode) {
  return municipalities[municipalityCode];
}

const onlyNames = function onlyNames(data) {
  const dataWithNames = {};

  Object.keys(data).forEach(municipalityCode => {
    const municipalityName = nameFromCode(municipalityCode)

    dataWithNames[municipalityName] = data[municipalityCode]
      .map(neighborCode => nameFromCode(neighborCode))
  });

  return dataWithNames;
};

const writeOutputFile = function (filename, outputString) {
  fs.writeFileSync(`./output/${filename}`, outputString);
}

const csvData = parseInputCsv();
const data = transformCsvData(csvData);

const sorted = Object.keys(data).sort()

const nameCodesString = sorted
  .map(municipalityCode => {
    neighborCodes = data[municipalityCode];

    neighborsString = neighborCodes
      .map(neighborCode => `${nameFromCode(neighborCode)} (${neighborCode})`)
      .join(", ");

    return `${municipalities[municipalityCode]} (${municipalityCode}): ${neighborsString}`;
  })
  .join("\r\n");

writeOutputFile("neighboring-municipalities-code.json", JSON.stringify(data));
writeOutputFile("neighboring-municipalities-name.json", JSON.stringify(onlyNames(data)));
writeOutputFile("neighboring-municipalities-name-code.txt", nameCodesString);

console.log("-------")
console.log("Copy and paste from console to README.md")
console.log("-------")
const markdownString = sorted
  .map(municipalityCode => {
    neighborCodes = data[municipalityCode];

    neighborsString = neighborCodes
      .map(neighborCode => nameFromCode(neighborCode))
      .join(", ");

    console.log(`${municipalities[municipalityCode]} | ${neighborsString}`);
  });
