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

view.displayMessage("Tap tap, is this thing in?");

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [
        {location: ["06", "16", "26"], hits: ["", "", ""]},
        {location: ["24", "34", "44"], hits: ["", "", ""]},
        {location: ["10", "11", "12"], hits: ["", "", ""]}
    ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            // location = ship.location; Временная переменная, используется для промежуточного хранения массива ship.locations/
            var index = ship.location.indexOf(guess); // Метод indexOf ищет в масиве указанное значение и возвращает его индекс (или -1, если значения нет в массиве)
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
}

var controller = {
    guesses: 0, // Количество выстрелов
    processGuess: function(guess) { // Обработка координат выстрела и передача их модели
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    }
    else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        }
        else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        }
        else {
            return row + column;
        }
    }
    return null;
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput") // Получение коорюинат от формы и передача их контрол
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

window.onload = init;