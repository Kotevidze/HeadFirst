var phoneNumber = "123-4567";
function validateLarri(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== "-") {
                return false;
            }
        }
        else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
            return false;
        }
        else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(validateLarri("1234567"));

function validateBred(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    var first = phoneNumber.substring(0, 3);
    var second = phoneNumber.substring(phoneNumber - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-")
    }
    return true;
}

console.log(validateBred("123-4567"));

function validateEmi(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}
console.log(validateEmi("123-4567"));