var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    cameraOn = true;
    return amount;
}

var amount = steal(balance, 1250);
console.log("Criminal: you stole " + amount + "!");