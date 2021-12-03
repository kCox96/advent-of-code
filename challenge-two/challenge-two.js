//CHALLENGE TWO
const readInputFile = require("../readInputFile");

//extract instructions
function parseInstructions(input) {
    const instructions = input.map(line => {
      const [direction, distance] = line.split(' ')
      return {
        direction,
        distance: Number.parseInt(distance)
      }
    })
    console.log(instructions);
    return instructions;
  }

let data = readInputFile.readInputFile('./input.txt');
data = parseInstructions(data);

// let TEST_ARRAY = [
// 'forward 5',
// 'down 5',
// 'forward 8',
// 'up 3',
// 'down 8',
// 'forward 2'
// ]

// TEST_ARRAY = parseInstructions(TEST_ARRAY);

// create sub position object
let subPositionP2 = {
 aim: 0,
 horizontalPos: 0,
 depth: 0
};

function calculatePosition(input){
  input.forEach(element => {
     switch(element.direction){
        // if forward increase horizontal position by X and depth by aim * X
         case 'forward':
            subPositionP2.horizontalPos += element.distance;
            subPositionP2.depth += (subPositionP2.aim * element.distance);
            break;

        // if up decrease depth by X and aim by X
        case "up":
            subPositionP2.aim -= element.distance;
            console.log(subPositionP2.depth);
            break;

        // if down increase depth by X and increase aim by X
        case "down":
            subPositionP2.aim += element.distance;
            console.log(subPositionP2.depth);
            break;

    }});

console.log(subPositionP2);
// calculate final position by multiplying horizontal position and depth
let finalPos = subPositionP2.horizontalPos * subPositionP2.depth;
return(finalPos);
}

console.log(calculatePosition(data));




