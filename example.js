//var ship1 = { locations: ["31", "41", "51"], hits: ["", "", ""]};
//var ship2 = { locations: ["14", "24", "34"], hits: ["", "", ""]};
//var ship3 = { locations: ["00", "01", "02"], hits: ["", "", ""]};

var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""]},
             { locations: ["14", "24", "34"], hits: ["", "hit", ""]},
             { locations: ["00", "01", "02"], hits: ["hit", "", ""]}];

var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if ( hits[0] === "hit") {
    console.log("Ouch, hit on third ship at location one");
}

var ship1 = ships[0];
var hits = ship1.hits;
hits[2] = "hit";

console.log(ship1.hits);