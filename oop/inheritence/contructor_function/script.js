'use strict';
//constructor
const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear

    //Never do this : should not create a method in constructor function , this can be acheived using prototypal inheritence
    // this.calcAge = function () {
    //     return new Date().getFullYear() - this.birthYear
    // }
}
const nithesh = new Person('Nithesh', 2004)
// console.log(nithesh)

// what happens with the new keyword
//1) New {} empty object is created
//2) Contructor function is called , this = {} empty object
//3) {} empty object is linked to the prototype
//4) constructor function automatically returns the {} empty object


const nithish = new Person('Nithish', 2003)
const nithil = new Person('Nithil', 2004)

// console.log(nithish)
// console.log(nithil)
console.log(nithesh instanceof Person)


//////////////////////////////
//PROTOTYPES

Person.prototype.calcAge = function () {
    return new Date().getFullYear() - this.birthYear
}

console.log(nithesh.calcAge())

//Prototypal inheritence
//Person.prototype and nithesh are linked so the calcAge can be used

console.log(nithil.calcAge(), nithish.calcAge())

Person.prototype.college = 'KEC'
console.log(nithesh)
console.log(nithesh.__proto__ === Person.prototype)
console.log(nithesh.__proto__)
console.log(Person.prototype)
console.log(Person.prototype.isPrototypeOf(nithesh))
console.log(nithesh.hasOwnProperty('college'))
console.log(nithesh.hasOwnProperty('firstName'))


//Array Prototype
const arr = [1, 2, 3, 4, 4, 3, 5, 1, 4]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__.__proto__)

//own method
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique())

console.log(arr.__proto__)




const Student = function (firstName, birthYear, course, college) {
    Person.call(this, firstName, birthYear)
    this.course = course
    this.college = college
}

// console.log(Student.prototype)
// console.log(Person.prototype)

Student.prototype = Object.create(Person.prototype)
console.log(Student.prototype)

Student.prototype.selfIntro = function () {
    return `My name is ${this.firstName} iam studying ${this.course} in ${this.college}`
}

const prithivi = new Student('Prithivi', 2004, 'cse', 'kec')
console.log(prithivi.selfIntro())
console.log(prithivi.calcAge())
console.log(Student.prototype === prithivi.__proto__)
console.log(prithivi instanceof Student)
console.log(prithivi instanceof Person)

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)
console.log(prithivi)