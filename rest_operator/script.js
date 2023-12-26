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

//SPREAD ,because right side of =
const [a, b, c, d] = [1, 2, ...[5, 6]]
console.log(a, b, c, d)

//REST, because left side of =
const [p, q, ...others] = [1, 2, 3, 4, 5]
console.log(p, q, others)

//Both REST and SPREAD 
const [one, two, ...three] = [1, 2, ...[4, 3]]
console.log(one, two, three)

//objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat, weekdays)

//Using Functions
const add = function (...num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    console.log(sum)
}
add(1, 2, 3, 4, 5)
const x = [1, 2, 3, 4]
add(...x)