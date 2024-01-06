'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const allSections = document.querySelectorAll('.section')
const imgTargets = document.querySelectorAll('img[data-src]');
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');



const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btns) => {
  btns.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth"
//     })
//   })
// )

//event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    })
  }
})

btnScrollTo.addEventListener('click', (e) => {
  // const s1top = section1.getBoundingClientRect().top;

  // //horizontal and vertical scroll
  // console.log('current scroll (x/y) :', window.pageXOffset, window.pageYOffset)
  // console.log('current scroll (x/y) :', window.scrollX, window.scrollY)

  // console.log('coordinates for height and width with respective to viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)

  // window.scrollTo({
  //   top: s1top + scrollY,
  //   behavior: 'smooth'
  // })
  //setting coordinates for scroll to the section one
  // window.scrollTo(
  //   {
  //     left: s1coords.left + window.scrollX,
  //     top: s1coords.top + window.scrollY,
  //     behavior: 'smooth'
  //   })
  section1.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const navLinksHovering = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// nav.addEventListener('mouseover', function (e) {
//   navLinksHovering(0.5, e)
// })

// nav.addEventListener('mouseout', function (e) {
//   navLinksHovering(1, e)
// })

//pssing argument to the handler function
nav.addEventListener('mouseover', navLinksHovering.bind(0.5))

nav.addEventListener('mouseout', navLinksHovering.bind(1))

//sticky
// window.addEventListener('scroll', function () {
//   const s1top = section1.getBoundingClientRect().top
//   if (window.scrollY > s1top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

const navHeight = nav.getBoundingClientRect().height
const stickyNav = function (entries) {
  entries.forEach(entry => {
    console.log(entry)
    if (!entry.isIntersecting) {
      nav.classList.add('sticky')
    }
    else {
      nav.classList.remove('sticky')
    }
  })
}

const ops = {
  root: null,
  threshold: 0.88,
  // rootMargin: `${navHeight}px`,
}

const oberserver = new IntersectionObserver(stickyNav, ops)
oberserver.observe(document.querySelector('.header'))


//reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries

  //Guard clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.23,
})
allSections.forEach((section) => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})


//lazy loading imgs
const imgLoader = function (entries, observer) {
  const [entry] = entries
  console.log(entry)
  if (!entry.isIntersecting) return
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(imgLoader, {
  root: null,
  threshold: 0,
  // rootMargin: '-100px'
})

imgTargets.forEach((img) => imgObserver.observe(img))


//slider component
const sliderComponent = function () {
  let curSlide = 0, maxSlide = slides.length;
  // slider.style.transform = 'scale(0.4) translateX(-800px)'
  // slider.style.overflow = 'visible';

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')
  }

  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
  }

  const nextSlide = function () {
    (curSlide === maxSlide - 1) ? curSlide = 0 : curSlide++;

    //transform : -100%,0%,100%
    goToSlide(curSlide)
    activeDot(curSlide)
  }

  const previousSlide = function () {
    (curSlide === 0) ? curSlide = maxSlide - 1 : curSlide--;
    goToSlide(curSlide)
    activeDot(curSlide)
  }

  const init = function () {
    //transform : 0%,100%,200%
    goToSlide(0)
    createDots()
    activeDot(0)
  }
  init()

  //event handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', previousSlide)
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' ? nextSlide() : e.key === 'ArrowLeft' ? previousSlide() : null
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide
      const { slide } = e.target.dataset
      goToSlide(slide)
      activeDot(slide)
    }
  })
}
sliderComponent()

//beforeunload event
window.addEventListener('beforeunload', function (e) {
  e.preventDefault()
  e.returnValue = ''
})

//////////////////////////////
///////////////////////////
///////////////////////////

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
// message.classList.add('.cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });


// //styles
// message.style.backgroundColor = '#37383d'
// message.style.color = 'white'
message.style.alignItems = 'center'
message.style.width = '100%'
message.style.display = 'flex'
message.style.justifyContent = 'space-evenly'
message.style.fontSize = '1.5rem'
message.style.fontWeight = 400

console.log(getComputedStyle(message).height)
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

// document.documentElement.style.setProperty('--color-primary', 'orange')

//Attributes
const logo = document.querySelector('.footer__logo')
console.log(logo.src)
logo.alt = 'beatiful'
console.log(logo.alt)

//non-standard attribute
console.log(logo.designer) //undefined
console.log(logo.getAttribute('designer')) //nithesh
logo.setAttribute('company', 'bankist')
console.log(logo.getAttribute('company'))

// Data attributes
// data attributes starts with the word data
//always stored in the dataset attribute
console.log(logo.dataset.versionNumber)

//classes
logo.classList.add('logo--class')
logo.classList.add('1', '2', '3') //adding multiple values
logo.classList.remove('1', '2', '3')
logo.classList.toggle('1')
logo.classList.contains('1')

//dont use, this will erase the all existing classes
//  logo.className = 'nithesh'
//always use
logo.classList.add('nithesh')
*/



// const h1 = document.querySelector('h1')
// const hovering = () => {
//   alert('hovering the h1')
//   // h1.removeEventListener('mouseenter', hovering)
// }
// h1.addEventListener('mouseenter', hovering)

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', hovering)
// }, 3000)

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const randint = () => `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randint()
//   console.log(e.target, e.currentTarget)
// })
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randint()
//   console.log(e.target, e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randint()
//   console.log(e.target, e.currentTarget)
// })

////////////////////////////
//DOM TRAVERSING

// const h1 = document.querySelector('h1')

// //going downwards : childrens

// console.log(h1.querySelectorAll('.highlight')) //nodelist of elemets
// console.log(h1.childNodes) //nodelist of all elements including text,comment
// console.log(h1.children) // html collection consists of elements
// console.log(h1.firstElementChild) //first nearest HTML child element
// console.log(h1.firstChild) //first nearest element
// console.log(h1.lastChild) //first nearest element
// console.log(h1.lastElementChild) //Last nearest HTML child element

// //going downwards : parents
// console.log(h1.parentElement) //returns immediate parent to be an element node
// console.log(h1.parentNode) //returns immediate parent node regardless of its type
// console.log(h1.closest('.header')) //used to find the closest ancestor of the current element (or the element itself) that matches a specified CSS selector

// //going sideways: siblings
// console.log(h1.previousElementSibling) //returns the previous sibling of the h1 element
// console.log(h1.nextElementSibling) //returns the next sibling of the h1 element
// console.log(h1.previousSibling) //returns the previous sibling of any type
// console.log(h1.nextSibling) //returns the next sibling of any type
// console.log(h1.parentElement.childElementCount) //returns the count
// console.log(h1.parentElement.children); //returns the html collection

// [...h1.parentElement.children].forEach(el => {
//   el.style.backgroundColor = 'yellow'
// })

