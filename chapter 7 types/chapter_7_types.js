var x;
if (x == undefined) {
    console.log("Переменная х не инициализирована!");
}

var customer = {
    name: "Jenny"
};
if (customer.phoneNumber == undefined) {
    console.log("Получить номер телефона");
}

var subject = "Строка";
var subject2 = 43;
var subject3 = true;
var subject4 = {};
var subject5 = [];
var subject6;
var subject7 = {"абвгд": 123};
var subject8 = ["абвгд", 123];
function subject9() {return "абвгд"};
var subject10 = null;
var subject11 = 0/0;
var subject12 = "food" * 100;
var subject13 = Math.sqrt(-1);
var subject14;

console.log("subject is " + typeof subject);
console.log("subject2 is " + typeof subject2);
console.log("subject3 is " + typeof subject3);
console.log("subject4 is " + typeof subject4);
console.log("subject5 is " + typeof subject5);
console.log("subject6 is " + typeof subject6);
console.log("subject7 is " + typeof subject7);
console.log("subject8 is " + typeof subject8);
console.log("subject9 is " + typeof subject9);
console.log("subject10 is " + typeof subject10);
console.log("subject11 is " + typeof subject11);
console.log("subject12 is " + typeof subject12);
console.log("subject13 is " + typeof subject13);
console.log("subject14 is " + typeof subject14);
console.log("subject15 is " + typeof subject15);

var myNum;
if (isNaN(myNum)) {
    myNum = 0;
    console.log(myNum);
}

var Num2 = Math.sqrt(-1);
console.log(Num2);