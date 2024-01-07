'use strict';
/////////////
//classes
//classes can have both declaration and expression
//expression
// const PersonCl = class {

// }
//declaration
class PersonCl {
    //automatically the contructor function gets returned,name can be any
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    }

    calcCutOff(math, phy, chem) {
        console.log(Math.floor(math + (phy / 50) + (chem / 50)))
    }

    set firstName(name) {
        if (name.length < 3) alert(`${name} is not a full name!`);
        else this._firstName = name;
    }

    get firstName() {
        return this._firstName;
    }

    get name() {
        return `${this.firstName}`
    }

    static welcome() {
        console.log('welcome back!')
    }
}
const nitheshravik = new PersonCl('Nithesh', 2004)
console.log(nitheshravik.name)

// // PersonCl.prototype.calcAge = function (birthYear) {
// //     console.log(new Date().getFullYear() - birthYear)
// // }
// nitheshravik.calcAge(2004)
// nitheshravik.calcCutOff(75, 92, 81)

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

const nk = new PersonCl('nkhb', 2004)
console.log(nk.firstName)
PersonCl.welcome()


class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course,) {
        super(firstName, birthYear)
        this.course = course
    }

    selfIntro() {
        return `My name is ${this.firstName} iam studying ${this.course}`
    }


    //overriding 
    calcAge() {
        console.log(`I am ${new Date().getFullYear() - this.birthYear} years old`)
    }
}

const mik = new StudentCl('mikeeey', 2004, 'cse')
console.log(mik)
console.log(mik.selfIntro())
mik.calcAge()