'use strict';
const allModalsBtn = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

allModalsBtn.forEach((btn) => {
    return btn.addEventListener('click', openModal)
})

closeBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
})