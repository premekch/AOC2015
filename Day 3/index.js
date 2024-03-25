import * as fs from "fs";
const allContents = fs.readFileSync("instructions.txt", "utf-8");
let coordX = 0;
let coordY = 0;

var visitedHouses = {};
visitedHouses["0_0"] = 1;

for (let i = 0; i < allContents.length; i++) {
  // zjistit jaky je na teto pozici znak
  let character = allContents.charAt(i).toString(); // zjistit znak ktery je na dane pozici v retezci

  switch (character) {
    case "v":
      coordY--;
      break;
    case "^":
      coordY++;
      break;
    case ">":
      coordX++;
      break;
    case "<":
      coordX--;
      break;
    default:
      console.log(`Default message.`);
  }

  if (visitedHouses[`${coordX}_${coordY}`] === undefined) {
    visitedHouses[`${coordX}_${coordY}`] = 1;
  }
}

console.log(Object.keys(visitedHouses).length);
