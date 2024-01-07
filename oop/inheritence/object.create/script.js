'use strict';

////////////////////////
//object.create()

const PersonProto = {
    greet() {
        console.log(`Hello ${this.firstName}`)
    },
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const StudentProto = Object.create(PersonProto)

StudentProto.init = function (firstName, lastName, course) {
    PersonProto.init.call(this, firstName, lastName)
    this.course = course
}

const nithesh = Object.create(StudentProto)
nithesh.init('nithesh', 'ravikumar', 'cse')
console.log(nithesh)
nithesh.greet()