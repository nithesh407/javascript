'use strict';
///forOf loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToInr = 92.04
const movementsInr = movements.map(mov => Math.trunc(mov * eurToInr))
console.log(movementsInr)

const movementDescriptions = movements.map((mov, i) => {
    return `you ${mov > 0 ? 'deposited' : 'withdrawed'} ${Math.abs(mov)} at ${i + 1}`
})
console.log(movementDescriptions)