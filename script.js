const age = 12;
console.log(age);

const name = "Artem";
console.log(name);

const isStudent = true; 
console.log(isStudent);


const myString = "Ваш час обмежений, не витрачайте його, живучи чиїмось життям.";
console.log(myString);


let myNumber = 42;
myNumber += 10;
console.log(myNumber);


const myNull = null;
console.log(myNull);

let userName = prompt("Будь ласка, введіть своє ім'я:");
alert("Привіт, " + userName + "!");

let confirma = confirm("Ви хочете продовжити?");
if (confirma) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною.");
let userConfirm = confirm("Ви впевнені, що хочете продовжити?");
if (userConfirm) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}