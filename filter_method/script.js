'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//only deposits
const deposits = movements.filter((mov, i, arr) => mov > 0)
console.log(deposits)

//only withdraws
const withdraws = movements.filter(mov => mov < 0)
console.log(withdraws)