const transformCsvData = (csvData) => {
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

export default transformCsvData;
