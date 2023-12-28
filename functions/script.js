'use strict';
//////////////////////////
//call-back functions
const transformFirstWord = (str) => {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = (str, fn) => {
    console.log(`Transformed string: ${fn(str)}`)
}
transformer('javascript is worth learning!', transformFirstWord)

/////////////////////////
//functions returning a function
const greet = greeting => name => console.log(`${greeting}, ${name}`)


const greeting = greet('hey')
greeting('Nithesh Ravikumar')
greeting('Prithivi Raj')



///////////////////////////////////
//CALL,APPLY AND BIND Methods

const airIndia = {
    flightName: 'AirIndia1',
    iataCode: 'AI1',
    bookings: [],
    book(flightNum, passengerName) {
        this.bookings.push(`Hey, ${passengerName} your ${this.flightName} : ${flightNum} iataCode is ${this.iataCode}`)
    }
}

airIndia.book(23, 'Nithesh')
console.log(airIndia.bookings)


const airEurope = {
    flightName: 'AirEurope1',
    iataCode: 'AE1',
    bookings: [],
}

const airUSA = {
    flightName: 'AirUSA1',
    iataCode: 'AU1',
    bookings: [],
}

const book = airIndia.book

// book('prith', 43) //this keywords will be undefined to a function

/////////////////
//CALL method
book.call(airEurope, 43, 'Prithivi')
console.log(airEurope.bookings)

//APPLY method
book.apply(airUSA, [30, 'preethi'])
console.log(airUSA.bookings)

//BIND Method
const bookIndia = book.bind(airIndia)
bookIndia(67, 'john')
console.log(airIndia.bookings)

const bookIndia23 = book.bind(airIndia, 23)
bookIndia23('nithesh ravik')
console.log(airIndia.bookings)

// const addVAT = rate => value => value + value * rate
// const addVATwithRate = addVAT(0.18)
// console.log(addVATwithRate(200))

const addTax = (rate, value) => value + value * rate
console.log(addTax(0.18, 200))
const addVAT = addTax.bind(null, 0.18)
console.log(addVAT(200))
