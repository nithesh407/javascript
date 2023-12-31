'use strict';

const arr = ['a', 'b', 'c', 'c', 'd', 'e']

///LENGTH
console.log(arr.length)

/// PUSH //adds to last of the arr
arr.push('f')
console.log(arr)

/// UNSHIFT //adds to first of the arr
arr.unshift('g')
console.log(arr)

/// POP //deletes from last of the array
console.log(arr.pop())
console.log(arr)

/// SHIFT ////deletes from first of the array
console.log(arr.shift())
console.log(arr)

///INDEXOF 
console.log(arr.indexOf('c'))

///LASTINDEXOF 
console.log(arr.lastIndexOf('c'))

///SLICE
console.log(arr.slice(1, 3)) //arr.slice(begin,end-1)
console.log(arr) //does not mutate the array

///SPLICE
//arr.splice(begin,total no of elements to be deleted)
arr.splice(2, 3) //arr.splice will delete the elements and mutates the array
console.log(arr)

///REVERSE
const arr2 = ['f', 'g', 'h']
arr2.reverse() //mutates the array
console.log(arr2)

///CONCAT
const newArr = arr.concat(arr2)
// const newArr = [...arr, ...arr2]
console.log(newArr)

///JOIN 
console.log(newArr.join('-')) //return a string with provided seperator value

///AT
console.log(newArr)
console.log(newArr.at(3))
console.log(newArr[newArr.length - 1])
console.log(newArr.slice(-1).join())
console.log(newArr.at(-1))

const account1 = {
    owner: 'Revanth Kailasam',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//some 
const someDeposits = movements.some((mov, i, arr) => mov > 0)
console.log(someDeposits) //returns true

//every
const everyDeposits = movements.every((mov, i, arr) => mov > 0)
console.log(everyDeposits) //returns false

//flat
const balance =
    accounts
        .map((acc) => acc.movements)
        .flat()
        .reduce((acc, mov) => acc + mov, 0)
console.log(balance)

//flatMap

const balance2 =
    accounts
        .flatMap((acc) => acc.movements)
        .reduce((acc, mov) => acc + mov, 0)
console.log(balance2)

//sorting
const arr1 = ['ravikumar', 'nithesh', 'haresh', 'karthi']
console.log(arr1.sort())

//numbers 
// console.log(movements.sort()) //will not work for numbers
//ascending order
// movements.sort((a, b) => {
//     if (a < b) return -11
//     if (a > b) return 34
// })

movements.sort((a, b) => a - b)
console.log(movements)


//descending order
// movements.sort((a, b) => {
//     if (a < b) return 134
//     if (a > b) return -198
// })

movements.sort((a, b) => b - a)
console.log(movements)

//ways to creating arrays
//fill
const x = Array(7)
console.log(x)
x.fill(1, 2, 6) //element,start,end-1
console.log(x)

//Array.from
const y = Array.from({ length: 7 }, () => 1)
console.log(y)
const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)

//sum of n elements
const sum = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, ele) => acc + ele, 0)
console.log(sum)

//exercises using array methods
//1.
const totDepositMovments =
    accounts
        .flatMap(acc => acc.movements)
        .reduce((acc, mov) => mov > 0 ? acc + mov : acc, 0)
console.log(totDepositMovments)

//2.
// const numDeposits1000 =
//     accounts
//         .flatMap(acc => acc.movements)
//         .filter(mov => mov >= 1000)
//         .length

const numDeposits1000 =
    accounts
        .flatMap(acc => acc.movements)
        .reduce((count, mov) => mov >= 1000 ? ++count : count, 0)
console.log(numDeposits1000)

//3.sums of deposits and withdrawls
const { deposit, withdrawl } =
    accounts
        .flatMap(acc => acc.movements)
        .reduce((sums, mov) => {
            // mov > 0 ? sums.deposit += mov : sums.withdrawl += mov
            sums[mov > 0 ? 'deposit' : 'withdrawl'] += mov
            return sums
        }, { deposit: 0, withdrawl: 0 })

console.log(deposit, withdrawl)

//4.
//this is a nice title => This Is a Nice Title
const covertString = (str) => {
    const exceptions = ['a', 'an', 'and', 'or', 'but', 'the', 'in', 'with', 'on']
    const title =
        str
            .toLowerCase()
            .split(' ')
            // .filter(word => exceptions.includes(word))
            .map(str => exceptions.includes(str) ? str : str[0].toUpperCase() + str.slice(1))
            .join(' ')
    return title
}
console.log(covertString('this is a nice title'))
console.log(covertString('this is a LONG title but not too long'))
console.log(covertString('and this is a LONG title but not too long'))


