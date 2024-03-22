import * as fs from "fs";
const allContents = fs.readFileSync("packing.txt", "utf-8");

let ribbon = 0;

allContents.split(/\r?\n/).forEach((line) => {
  let singleBox = line.split("x");
  console.log(singleBox);

  singleBox.sort(function (a, b) {
    return a - b;
  });

  let min1 = singleBox[0];
  let min2 = singleBox[1];

  let ribbonBox = 2 * min1 + 2 * min2;

  let volume = singleBox[0] * singleBox[1] * singleBox[2];

  let ribbonTotal = ribbonBox + volume;

  ribbon = ribbon + ribbonTotal;

  console.log(" necessary ribbon: " + ribbonTotal);
});

console.log("Total necessary ribbon: " + ribbon);
