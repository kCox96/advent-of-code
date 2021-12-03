// read in input and convert to array
const fs = require('fs');

const readInputFile = (path) => {
    const inputFile = fs.readFileSync(path, "utf-8");
    const inputByLine = inputFile.split("\n");
    return inputByLine;
    }

module.exports = {readInputFile};