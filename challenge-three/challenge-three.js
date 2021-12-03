const readInputFile = require("../readInputFile");
let data = readInputFile.readInputFile('./input.txt');

// test input
let TEST_INPUT = [
'00100',
'11110',
'10110',
'10111',
'10101',
'01111',
'00111',
'11100',
'10000',
'11001',
'00010',
'01010',
]

function solve(input) {
    let gamma = [];
    let epsilon = [];
    // loop through length of array element
    for (let i = 0; i < input[0].length; i++) {
        // 0 , 1
        let occurences = [0,0];
        // loop through length of array
        for (let j = 0; j < input.length; j++) {
            // get bit at each index
            let char = input[j].charAt(i);
            if(char === "0"){
                occurences[0]++;
            }else if(char === "1"){
                occurences[1]++;
            }else{
                console.warn('Not recognized:', char);
            }
        }
        gamma.push(occurences[0] > occurences[1]? "0" : "1")
        epsilon.push(occurences[1] > occurences[0]? "0" : "1")
    }
    return parseInt(gamma.join(""),2) * parseInt(epsilon.join(""),2);
}

console.log(solve(data));
