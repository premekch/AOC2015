import * as fs from "fs";
const allContents = fs.readFileSync("instructions.txt", "utf-8");
let coordXSanta = 0;
let coordYSanta = 0;
let coordXRoboSanta = 0;
let coordYRoboSanta = 0;

var visitedHouses = {};
visitedHouses["0_0"] = 1;
/*
var persons = {};
persons["Santa" => "0_0", "RoboSanta" => "0_0"];
*/

//allContents.length
for (let i = 0; i < allContents.length; i++) {
  // zjistit jaky je na teto pozici znak
  let character = allContents.charAt(i).toString(); // zjistit znak ktery je na dane pozici v retezci

  if (i % 2 == 1) {
    if (character === "v") {
      coordYSanta--;
    } else if (character === "^") {
      coordYSanta++;
    } else if (character === ">") {
      coordXSanta++;
    } else if (character === "<") {
      coordXSanta--;
    } else {
      console.log(`Default error message.`);
    }

    //persons["Santa" => `${coordX}_${coordY}`];

    if (visitedHouses[`${coordXSanta}_${coordYSanta}`] === undefined) {
      visitedHouses[`${coordXSanta}_${coordYSanta}`] = 1;
    }
  } else {
    if (character === "v") {
      coordYRoboSanta--;
    } else if (character === "^") {
      coordYRoboSanta++;
    } else if (character === ">") {
      coordXRoboSanta++;
    } else if (character === "<") {
      coordXRoboSanta--;
    } else {
      console.log(`Default error message.`);
    }

    if (visitedHouses[`${coordXRoboSanta}_${coordYRoboSanta}`] === undefined) {
      visitedHouses[`${coordXRoboSanta}_${coordYRoboSanta}`] = 1;
    }
  }
}
//console.log(visitedHouses);
console.log(Object.keys(visitedHouses).length);
