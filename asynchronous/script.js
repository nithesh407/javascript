'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg)
  countriesContainer.style.opacity = 1
}

const getCurrencyandLanguage = (data) => {
  const countryCode = Object.keys(data.currencies)[0]
  const languageCode = Object.keys(data.languages)
  const currencyName = data.currencies[countryCode].name
  const symbol = data.currencies[countryCode].symbol
  const language = languageCode.map(lang => data.languages[lang])
  return [language, currencyName, symbol]
}

const renderHtml = (data, className = '') => {
  const [language, currencyName, symbol] = getCurrencyandLanguage(data)
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} Million people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currencyName} ${symbol}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html)
  countriesContainer.style.opacity = 1;
}


// const getCountry = function (country) {

//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//   request.send()
//   // console.log(request.responseText)

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText)
//     console.log(data)
//     renderHtml(data)

//     const neighbour = data.borders?.[0]

//     if (!neighbour) return;

//     const neighbourRequest = new XMLHttpRequest()
//     neighbourRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
//     neighbourRequest.send()

//     neighbourRequest.addEventListener('load', function () {
//       const [neighbourData] = JSON.parse(neighbourRequest.responseText)
//       console.log(neighbourData)
//       renderHtml(neighbourData, 'neighbour')
//     })
//   })
// }

// getCountry('usa')



// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found! ${response.status}`)
//       }
//       return response.json()
//     })
//     .then(data => {
//       renderHtml(data[0])
//       const neighbour = data[0]?.borders[0]
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => response.json())
//     .then(data => renderHtml(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something Went Wrong! ${err.message} Try again!`)
//       console.log(err.message)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })

// }

// btn.addEventListener('click', () => {
//   getCountry('csvfberdfxfv')
// })

// getCountry('sdvrervdcadveb')


const getJson = function (url, errMsg = 'Something went wrong!!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`)
    return response.json()
  })
}

const getCountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
    .then(data => {
      renderHtml(data[0])
      if (!('borders' in data[0])) throw new Error('No neighbour found');
      const neighbour = data[0]?.borders[0]
      return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country Not Found')
    })
    .then(data => renderHtml(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something Went Wrong! ${err.message} Try again!`)
      console.log(err.message)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    })
}

// getCountry('bharat')



// setTimeout(() => {
//   console.log('1 second pases')
//   setTimeout(() => {
//     console.log('2 second pases')
//     setTimeout(() => {
//       console.log('3 second pases')
//       setTimeout(() => {
//         console.log('4 second pases')
//         setTimeout(() => {
//           console.log('5 second pases')
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)




// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000)
//   })
// }

// wait(1)
//   .then(() => {
//     console.log('1 second pases')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('2 second pases')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('3 second pases')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('4 second pases')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('5 second pases')
//   })

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json()
//   renderHtml(data[0])
// };

// whereAmI('portugal')
// console.log('FIRST')

const getDataPosts = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  const { title } = data.at(-1)
  console.log(title)
}

getDataPosts()