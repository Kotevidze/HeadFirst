var phoneNumber = "123-4567";
var isAccepted = function(phoneNumber) {
    for(var i = 0; i < phoneNumber.length && i <= 8; i++) {
        if (phoneNumber[i] == "-") {
            return true;
            var j = i;
        }
        else if (isNaN(phoneNumber[j])) {
            return true;
        }
        else if (isNaN(phoneNumber[i])) {
            return false;
        }
        return false;
    }
}

console.log(isAccepted("123-4-67"));