'use strict';

//1) Array Destructuring
const course = {
    firstName: 'Nithesh',
    LastName: 'Ravikumar',
    age: 20,
    coursesLearned: ['node', 'react', 'mongo', 'express', 'javascript'],
    coursesNotLearned: ['Golang', 'Redis', 'kafka'],
    combine: function (learned, notLearned) {
        return [this.coursesLearned[learned], this.coursesNotLearned[notLearned]]
    }
}
console.log(course)

//Destructuring from object array
let [main, second] = course.coursesLearned
console.log(main, second);

//Switching variables
[main, second] = [second, main];
console.log(main, second)

//Returning two values from a array from function
const [learned, notLearned] = course.combine(2, 0)
console.log(learned, notLearned)

//Nested Destructuring
const arr = [1, 2, [3, 4]]
const [i, j, [k, l]] = arr
console.log(i, j, k, l)

//Default values
const [p = 1, q = 1, r = 1] = [2, 3]
console.log(p, q, r) //2 3 1


//2) Object Destructuring
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
    }
};

//Destructuring objects
// const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)

//assigning new variables
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags)

//default values and new variables
const { menu = [], starterMenu: starter = [] } = restaurant
console.log(menu, starter)

//Nested Objects
const { fri: { open = 10, close = 20 } } = restaurant.openingHours
console.log(open, close)

//calling method with destructuring
console.log(restaurant.order({
    starter: 2,
    main: 1
}))
