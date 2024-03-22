import * as fs from "fs";
const allContents = fs.readFileSync("packing.txt", "utf-8");

let cover = 0;

allContents.split(/\r?\n/).forEach((line) => {
  let singleBox = line.split("x");
  console.log(singleBox);

  let boxCoverSide1 = singleBox[0] * singleBox[1];
  let boxCoverSide2 = singleBox[0] * singleBox[2];
  let boxCoverSide3 = singleBox[1] * singleBox[2];

  let boxCover = 2 * boxCoverSide1 + 2 * boxCoverSide2 + 2 * boxCoverSide3;

  let minSide = Math.min(boxCoverSide1, boxCoverSide2, boxCoverSide3);

  boxCover += minSide;

  console.log("Box cover is " + boxCover);
  cover += boxCover;
});

/*let myArray = [1, 2, 3];
var minNum = Math.min.apply(null, myArray);
*/
console.log("Total necessary paper: " + cover);
//console.log("Total necessary paper: " + minNum);
