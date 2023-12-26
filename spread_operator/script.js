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
    dishes: (one, two, three) => {
        return `your dishes are ${one},${two} and ${three}`
    }
};

//Arrays
console.log(...restaurant.mainMenu)
const str = "nithesh"
const arr = [...str]
console.log(arr)
const newArr = ['mushroom', 'parotta', 'dosa']
console.log(restaurant.dishes(...newArr))

//Objects
const restaurantCopy = { ...restaurant }
console.log(restaurantCopy)
restaurantCopy.name = 'Nithesh Ravikumar'
console.log(restaurantCopy.name)
console.log(restaurant.name)