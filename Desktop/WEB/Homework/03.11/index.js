'use strict'

//1
let cafe = 'Kolsay';
cafe = 'Kayindy';
console.log(cafe)

const adminCafe = `Aselya love this cafe the ${cafe}`;
console.log(adminCafe);
{
    var city = 'Almaty';
}
const from = `Aselya from ${city} city`;
console.log(from);

const personalA = 12;
const personalB = 5;
const sumPers = `Total personal equals ${personalA + personalB}`;
console.log(sumPers);

let averageAge = 27;
console.log(averageAge);

let isAge = true;
isAge = false;
console.log(isAge);


//2
const vehicle = {
    brandName: 'BMW',
    model: 'X5',
}
vehicle.model = 'M1'; //change
console.log(vehicle);

delete vehicle.model; //delete
console.log(vehicle);


//3
let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}
for (let key in salaries) {
    console.log(key, '=', salaries[key]);
    
}
console.log('total salary =',390);
