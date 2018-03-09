var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit")
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss")
    }
};

view.displayHit("06");
view.displayMiss("13");
view.displayHit("24");
view.displayMiss("31");
view.displayHit("10");
view.displayHit("34");
view.displayMiss("50");
view.displayMiss("01");
view.displayHit("26");
view.displayHit("11");
view.displayHit("12");
view.displayHit("44");
view.displayHit("16");
view.displayMessage("Tap tap, is this thing in?");

var ships = [{location: ["06", "16", "26"], hits: ["hit", "hit", "hit"]},
            {location: ["24", "34", "44"], hits: ["hit", "hit", "hit"]},
            {location: ["10", "11", "12"], hits: ["hit", "hit", "hit"]}];