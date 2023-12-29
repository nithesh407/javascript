'use strict';

//Example 1

const counterFunc = () => {
    let count = 0;
    return function () {
        count++
        console.log(count)
    }
}

const counter = counterFunc() //closure between counter and counterFunc
counter()
counter()
counter()
console.dir(counter)
//Example 2
//setTimeout function has the closure to the boardPassenger function even the boardPassenger is finished executed
const boardPassengers = (n, wait) => {
    const perGroup = Math.floor(n / 3)
    setTimeout(function () {
        console.log(`we are boarding all ${n} passengers`)
        console.log(`Each group has ${perGroup} passengers`)
    }, wait * 1000)
    console.log(`we will start boarding after ${wait} seconds!`)
}

boardPassengers(100, 3)