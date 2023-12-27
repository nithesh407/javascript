'use strict';

const teacher = ['nithesh', 'nithish', 'nithil', 'nithesh', 'nithish', 'nithil']
console.log(teacher)
const set = new Set(teacher)
console.log(set)
console.log(set.size)
set.add('prithivi')
set.delete('nithesh')
console.log(set)
console.log(set.has('nithish'))
// set.clear()
// console.log(set)
for (const ele of set) console.log(ele)
const newTeacher = [...new Set(teacher)]
console.log(newTeacher)


// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },

//     order: function ({ starter, main }) {
//         return [this.starterMenu[starter], this.mainMenu[main]]
//     },
// };



