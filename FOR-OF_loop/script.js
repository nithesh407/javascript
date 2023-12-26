'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function ({ starter, main }) {
        return [this.starterMenu[starter], this.mainMenu[main]]
    },
};

//For-OF loop with arrays
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']
for (const day of days) console.log(day)

//entries() for index values
for (const day of days.entries()) {
    // console.log(`${day[0] + 1}, ${day[1]}`)
}

//entries() for index values with destructuring
for (const [key, value] of days.entries()) {
    // console.log(`${key + 1}, ${value}`)
}

//For-OF loop with Objects

//looping over property names
const openingHoursKeys = Object.keys(restaurant.openingHours)
for (const day of openingHoursKeys) {
    console.log(`restaurant opens only at ${day}`)
}
console.log(`restaurant opens only at ${[...openingHoursKeys]}`)

//looping over property Values
const openingHoursValues = Object.values(restaurant.openingHours)
// console.log(openingHoursValues)

//looping over Entire Object
const openingHours = Object.entries(restaurant.openingHours)
for (const [key, { open, close }] of openingHours) {
    console.log(`restaurant available at ${key}, opens in ${open} and closes in ${close}`)
}
