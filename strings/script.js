'use strict';

const msg = 'hello there nithesh ravikumar'

//reversing a string
console.log(msg.split(' ').reverse().join(' '))

const card = (num) => {
    const cardNumber = String(num)
    return cardNumber.slice(-4).padStart(cardNumber.length, '*')
}
console.log(card(1234567890123456))

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getSliceandUpper = str => str.slice(0, 3).toUpperCase()

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';')
    const output = `${type.startsWith('_Delayed') ? '❌' : ''}${type.replaceAll('_', ' ')} from ${getSliceandUpper(from)} to ${getSliceandUpper(to)} (${time.replace(':', 'h')})`.padStart(44, '-')
    console.log(output, output.length)
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)