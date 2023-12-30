'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//calculating balance

//accumulator initial value should be the 2nd argument for the reduce method
const balance = movements.reduce((accumulator, currentElement, index, array) => {
    return accumulator + currentElement
}, 0)
console.log(balance)

// let balance2 = 0
// for (const mov of movements) {
//     balance2 += mov
// }
// console.log(balance2)