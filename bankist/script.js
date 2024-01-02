'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Revanth Kailasam',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-01T18:45:33.035+05:30',
    '2019-11-30T15:18:16.867+05:30',
    '2019-12-25T11:34:23.907+05:30',
    '2020-01-25T19:48:46.235+05:30',
    '2020-02-05T22:03:06.386+05:30',
    '2023-12-27T20:13:26.374+05:30',
    '2023-12-29T10:19:59.371+05:30',  // Note: Indian Standard Time is ahead by 30 minutes during this date due to a 30-minute time zone offset change.
    '2024-01-01T10:19:59.371+05:30'
  ],
  currency: 'INR',
  locale: 'en-IN', // Updated locale to 'en-IN'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T18:45:33.035+05:30',
    '2019-11-30T15:18:16.867+05:30',
    '2019-12-25T11:34:23.907+05:30',
    '2020-01-25T19:48:46.235+05:30',
    '2020-02-05T22:03:06.386+05:30',
    '2020-04-10T20:13:26.374+05:30',
    '2020-06-26T10:19:59.371+05:30',  // Note: Indian Standard Time is ahead by 30 minutes during this date due to a 30-minute time zone offset change.
    '2020-07-28T10:19:59.371+05:30'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T18:45:33.035+05:30',
    '2019-11-30T15:18:16.867+05:30',
    '2019-12-25T11:34:23.907+05:30',
    '2020-01-25T19:48:46.235+05:30',
    '2020-02-05T22:03:06.386+05:30',
    '2020-04-10T20:13:26.374+05:30',
    '2020-06-26T10:19:59.371+05:30',  // Note: Indian Standard Time is ahead by 30 minutes during this date due to a 30-minute time zone offset change.
    '2020-07-28T10:19:59.371+05:30'
  ],
  currency: 'EUR',
  locale: 'pt-PT'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T18:45:33.035+05:30',
    '2019-11-30T15:18:16.867+05:30',
    '2019-12-25T11:34:23.907+05:30',
    '2020-01-25T19:48:46.235+05:30',
    '2020-02-05T22:03:06.386+05:30',
    '2020-04-10T20:13:26.374+05:30',
    '2020-06-26T10:19:59.371+05:30',  // Note: Indian Standard Time is ahead by 30 minutes during this date due to a 30-minute time zone offset change.
    '2020-07-28T10:19:59.371+05:30'
  ],
  currency: 'EUR',
  locale: 'pt-PT'
};

const account5 = {
  owner: 'pradeep dhandapani',
  movements: [430.56, 1000.43, 700.99, 50.23, 90.31],
  interestRate: 1,
  pin: 9168,
  movementsDates: [
    '2019-11-01T18:45:33.035+05:30',
    '2019-11-30T15:18:16.867+05:30',
    '2019-12-25T11:34:23.907+05:30',
    '2020-01-25T19:48:46.235+05:30',
    '2020-02-05T22:03:06.386+05:30'
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const updateUI = (acc) => {
  //Display movements
  displayMovements(acc)
  //Display balance
  displayBalance(acc)
  //Display summary
  displaySummary(acc)
}

const getDate = (date) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, 0)
  const day = `${date.getDay()}`.padStart(2, 0)
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hours = date.getHours()
  return [year, month, day, minutes, seconds, hours]
}

const internationalizedDate = (date) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric'
  }
  const locale = currentAccount.locale || 'en-US'
  return new Intl.DateTimeFormat(locale, options).format(date)
}

const calcFormattedCurrency = (value, acc) => {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(value)
}

const calcDisplayDateMovements = (date) => {
  const calcDisplayDay = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))
  }
  const daysPassed = calcDisplayDay(new Date(), date)
  console.log(daysPassed)
  if (daysPassed == 0) return 'Today'
  if (daysPassed == 1) return 'Yesterday'
  if (daysPassed <= 7) return `${daysPassed} days ago`
  const [year, month, day] = getDate(date)
  return `${year}/${month}/${day}`
}

const startLogoutTimer = () => {
  let minute = String(10).padStart(2, 0)
  let seconds = String(60).padStart(2, 0)
  const timer = setInterval(() => {
    labelTimer.textContent = `${minute}:${seconds}`
    if (minute >= 0) {
      if (seconds !== 0) {
        seconds--
      } else {
        minute--;
        seconds = 60
      }
    } else {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started'
      clearInterval(timer)
    }

  }, 1000)
  return timer
}

//displaying transactions done with that account
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = ''
  const mov = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements
  console.log(acc.movementsDates)
  mov.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal'
    const date = new Date(acc.movementsDates[i])
    const formatDisplayDate = calcDisplayDateMovements(date)
    const formattedMovement = calcFormattedCurrency(movement, acc);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${formatDisplayDate}</div>
          <div class="movements__value">${formattedMovement}</div>
          </div>
          `
    containerMovements.insertAdjacentHTML('afterbegin', html)
    // containerMovements.innerHTML += html
  })
}

//displaying income,outcome ,interest
const displaySummary = function (acc) {
  const incomes =
    acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${calcFormattedCurrency(incomes, acc)}`

  const outcomes =
    acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => (acc + mov), 0)
  labelSumOut.textContent = `${calcFormattedCurrency(Math.abs(outcomes), acc)}`

  const interest =
    acc.movements
      .filter(deposit => deposit > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      //interest dhould be greater than or equal to 1
      .filter((interest, index, arr) => {
        console.log(arr)
        return interest >= 1
      })
      .reduce((acc, interest) => acc + interest, 0)
  labelSumInterest.textContent = `${calcFormattedCurrency(interest, acc)}`
}


//displaying balance for the specific account
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov)
  labelBalance.textContent = calcFormattedCurrency(acc.balance, acc)
  const date = new Date()
  const formatedDate = internationalizedDate(date)
  labelDate.textContent = formatedDate
}

let currentAccount, timer

btnLogin.addEventListener('click', (e) => {
  e.preventDefault()
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.innerHTML = `Welcome back,  ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100
    inputLoginUsername.value = ''
    inputLoginPin.value = ''
    inputLoginUsername.blur()
    inputLoginPin.blur()

    //update UI
    updateUI(currentAccount)
  }
  if (timer) clearInterval(timer)
  timer = startLogoutTimer();
  sorted = false;
})


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(accounts)
  const amount = Number(inputTransferAmount.value)
  const transerTo = accounts.find((acc) => {
    return acc.username === inputTransferTo.value
  })
  inputTransferAmount.value = inputTransferTo.value = ''
  inputTransferTo.blur()
  inputTransferAmount.blur()

  if (amount > 0 && transerTo && currentAccount.balance >= amount && transerTo.username !== currentAccount.username) {

    //transfer amount
    currentAccount.movements.push(-amount)
    transerTo.movements.push(amount)
    currentAccount.movementsDates.push(new Date().toISOString())
    transerTo.movementsDates.push(new Date().toISOString())

    //update UI
    updateUI(currentAccount)

    //clear timer and start timer
    clearInterval(timer)
    timer = startLogoutTimer()
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount)
    currentAccount.movementsDates.push(new Date().toISOString())
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
  inputLoanAmount.blur()

  //clear timer and start timer
  clearInterval(timer)
  timer = startLogoutTimer()
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value
  const pin = Number(inputClosePin.value)
  console.log(user, pin)

  inputCloseUsername.value = inputClosePin.value = ''
  inputCloseUsername.blur()
  inputClosePin.blur()
  if (user === currentAccount.username && pin === currentAccount.pin) {
    containerApp.style.opacity = 0
    const accIndex = accounts.findIndex((acc) => acc.username === currentAccount.username)
    console.log(accounts.splice(accIndex, 1))
    labelWelcome.innerHTML = 'Log in to get started'
  }
})

let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted)
  sorted = !sorted
  //clear timer and start timer
  clearInterval(timer)
  timer = startLogoutTimer()
})

//creating usernames for each accounts
const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username =
      acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('')
  })
}
createUsername(accounts)
console.log(accounts)

