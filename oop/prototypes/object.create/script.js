'use strict';

////////////////////////
//object.create()

const PersonProto = {
    greet(firstName) {
        console.log(`Hello ${firstName}`)
    },
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const ravikumar = Object.create(PersonProto)

// ravikumar.greet('Ravikumar')
// console.log(ravikumar)
ravikumar.init('Ravikumar', 'Palanisamy')
console.log(ravikumar)

