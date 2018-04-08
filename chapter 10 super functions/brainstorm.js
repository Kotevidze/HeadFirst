var passengers = [
    { name: "Jane Doloop", paid: true},
    { name: "Dr.Evel", paid: true},
    { name: "Sue Property", paid: false},
    { name: "John Funcall", paid: true}
];
function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].paid) {
            return false;
        }
    }
    return true;
}
console.log(checkPaid(passengers));
//checkPaid(passengers);

