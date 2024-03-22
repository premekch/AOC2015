import * as fs from "fs";
const allContents = fs.readFileSync("instructions.txt", "utf-8");

let totalHousesWithAtLeastOneVisit = 0;

let coordX = 0;
let coordY = 0;
let count = 0;

// zaciname na souradnicich 0,0
let location = [coordX, coordY];

// vytvorime tabulku se seznamem navstivenych souradnic
var locationVisited = new Array();

// vytvorime tabulku se souradnicemi a poctem jejich navstev
var locationCount = new Array();

// zapiseme prvni bod souradnic a pridame mu navstevu
locationVisited.push([coordX, coordY]);
locationCount.push([coordX, coordY, 1]);
/*console.log(locationVisited);
console.log(locationCount);*/

// FOR TESTING
/*locationVisited.push([1, 1]);
locationVisited.push([1, 2]);*/

// posuneme souradnici podle prijateho znaku
//allContents.length
for (let i = 0; i < allContents.length; i++) {
  // prvotni souradnice
  /*console.log("Coordinates A are : " + location);*/

  // zjistit jaky je na teto pozici znak
  let character = allContents.charAt(i).toString(); // zjistit znak ktery je na dane pozici v retezci
  /*console.log("Character at " + (i + 1) + "th position is: " + character);*/

  // podle toho, jaky je znak, posunout coordinates ve spravnem smeru
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

  // aktualizovat souradnici na novou

  location[0] = coordX;
  location[1] = coordY;

  /*console.log("Coordinates B are : " + location);*/

  /*console.log("locartionVisited : " + locationVisited.length);
  console.log("locationCount : " + locationCount.length);*/

  var exists = false;

  let j = 0;

  for (j; j < locationVisited.length; j++) {
    /*console.log(j + "+ location visited length " + locationVisited.length);
    console.log(locationVisited.at(j));
    console.log(location);*/

    exists =
      locationVisited.at(j).length == location.length &&
      locationVisited.at(j).every(function (element, index) {
        return element === location[index];
      });
    /*console.log(exists);*/

    if (exists == true) {
      let number = locationCount.at(j)[2];
      number++;
      locationCount.at(j)[2] = number;
      break;
    }
  }

  if (exists == false) {
    /*console.log("does not exist");*/
    locationVisited.push([coordX, coordY]);
    locationCount.push([coordX, coordY, 1]);
    /*console.log("Location visited length 2 is " + locationVisited.length);
    console.log("Location count length 2 is " + locationCount.length);*/
  }

  /*console.log(locationVisited);*/
  /*console.log(locationCount);*/
  /*console.log("----");*/
}

// zjistime kolik radku ma vice nez 1 navstevu
//allContents.length
for (let i = 0; i < locationCount.length; i++) {
  /*console.log(locationCount.at(i)[2]);*/
  if (locationCount.at(i)[2] > 0) {
    totalHousesWithAtLeastOneVisit++;
  }
}
console.log(
  "Total houses visited at least once: " + totalHousesWithAtLeastOneVisit
);
