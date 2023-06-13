// this file will be responsible for handling logic to assist our other files
const { readFileSync, writeFileSync } = require("node:fs");

function readJSONFile(path, fileName) {
  const object = readFileSync(`${path}/${fileName}`, "utf8");
  return object ? JSON.parse(object) : [];
}

function writeJSONFile(path, fileName, data) {
  console.log(data, " before json")
  data = JSON.stringify(data);
  console.log(data, " after json")
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = { 
  readJSONFile,
  writeJSONFile
}
