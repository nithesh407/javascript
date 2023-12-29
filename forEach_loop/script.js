'use strict';
///forOf loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
    const output = movement > 0 ? `you deposited ${movement} at ${i + 1}` : `you withdrawed ${Math.abs(movement)} at ${i + 1}`
    console.log(output)
}

console.log('-------FOR EACH-------')
///forEach in array
movements.forEach((movement, i, arr) => console.log(movement > 0 ? `you deposited ${movement} at ${i + 1}` : `you withdrawed ${Math.abs(movement)} at ${i + 1}`))
//using forEach can easily get the index element and the order of the argument is (value,index,array)
//cannot use break and continue in forEach
//forEach can be used for looping over the entire array

///forEach in maps
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach((val, key, map) => console.log(`${key}: ${val} and the map size is ${map.size}`))

///forEach in sets
const setCurrencies = new Set(['USD', 'USD', 'EUR', 'EUR', 'GBP', 'GBP'])
setCurrencies.forEach((val, _, set) => console.log(`${val}: ${val} and the set size is ${setCurrencies.size}`))
//there will be no index or key in set ,simply in forEach the value will be set as key
