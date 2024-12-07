import fs from "fs";

const writeOutputFile = (filename, outputString) => {
  fs.writeFileSync(`./output/${filename}`, outputString);
};

export default writeOutputFile;
