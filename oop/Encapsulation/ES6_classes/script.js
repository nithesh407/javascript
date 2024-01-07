'use strict';

////////////////////////////
class Account {

    //Public Fields
    locale = navigator.language;
    static initialInterest = 2.3

    //Private Fields
    #movements = [];
    #pin;


    constructor(name, pin, age, currency) {
        this.name = name
        this.age = age
        this.currency = currency
        //Protected Property
        this.#pin = pin
        console.log(`Thanks for opening account ${this.name}`)
    }

    //Public Method
    //Public Interface(API)
    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    //Private Method
    #approveLoan(val) {
        return (val < 50000) ? true : false
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            console.log(`Loan Approved for ${this.currency} ${val}`);
            this.deposit(val);
        } else {
            console.log('Loan Cancelled!!');
        }
    }

    static helper() {
        console.log(`Bankist has the interest rate of ${this.initialInterest}`)
    }


}

const nithesh = new Account('nithesh', 1111, 20, 'INR')

// nithesh._.push(240)
// nithesh._.push(-150)

nithesh.deposit(480)
nithesh.withdraw(240)
nithesh.requestLoan(5000)

//cannot access privte field
// console.log(nithesh.#movements)
// console.log(nithesh.#pin)
// console.log(nithesh.#approveLoan)

Account.helper()
