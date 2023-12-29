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

