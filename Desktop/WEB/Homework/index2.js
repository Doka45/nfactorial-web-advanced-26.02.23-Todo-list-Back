"use strict"
// //1
let user = {
    name: "Konstantin",
    age: 30,
    isMen: true
}
alert("Hello user")

const userName = prompt("What's your name?", "")
console.log(userName);

const userAge = prompt("How old are you?", "")
console.log(userAge);

let userAnswer = confirm ("Are you a man?")
console.log(userAnswer);

//2
let lionAge = 5;
let tigerAge = 4;
let eagleAge = 9;

if (lionAge >= 6 && tigerAge >= 6) {
    let answer1 = prompt("think again")
    alert(answer1);
} else if (tigerAge <= 5 && eagleAge <= 8) {
    let answer2 = prompt ("think again")
    alert(answer2);
} else {
    let answer3 = prompt ("think again")
    alert(answer3);
}


3
let a = +prompt('a?', '');

switch (a) {
    case a == 0:
        alert("0");
        break;

    case a == 1:
        alert("1");
        break;

    case a == 2 || a == 3:
        alert('2,3');
        break;
    
}

//4

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    
    }
}



//5

let i = 0;
while (i < 3) {
      alert( `number ${i}!` );
    i++;
}





