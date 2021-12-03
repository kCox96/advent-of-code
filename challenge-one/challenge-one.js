const fs = require('fs');
import { readInputFile } from '../readInputFile';

const testArray = [199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263];

//CHALLENGE PART 1

// convert string array to int array
const stringArray = readInputFile("./input.txt")
const numberArray = stringArray.map(Number);

// for each number in array, check if it is higher than the previous number
function countFunc(array){
    for (let i = 0; i < array.length; i++){
        if (i != 0) {
            let prevElement = array[i - 1];
            let currElement = array[i];
                if (prevElement < currElement){
                    count++;
                    console.log(count);
                }
            }
        }
    }

// CHALLENGE PART 2

// compare the numbers in the array as sums of three
let summedArray = [];
for (let i =0; i < numberArray.length; i++) {
    let currNumber = numberArray[i];
        if (i <= (numberArray.length - 3)){
            let nextNumber = numberArray[i+1];
            let finalNumber = numberArray[i+2];
            let newElement = currNumber + nextNumber + finalNumber;
            // create a new array of the sums
            summedArray.push(newElement);
        }
    }

// testing output
fs.writeFile('summed-array.txt', summedArray, (err) => {
    if (err) throw err;
})

// compare the elements in this new array to get a count
countFunc(summedArray);


