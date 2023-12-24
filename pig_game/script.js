'use strict';

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

let scores, currentScore, activePlayer, playing

const init = () => {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0

    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}
init()

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
    currentScore = 0
}

btnRoll.addEventListener('click', () => {
    if (playing) {
        //1. Generate dice
        const dice = Math.trunc(Math.random() * 6 + 1)

        //2.Display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`

        //3.check if dice == 1
        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', () => {
    if (playing) {
        //1.Add current score to active players score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        //2.Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            //Finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden')
            playing = false;
        } else {
            //switch to next player
            switchPlayer()
        }
    }
})

btnNew.addEventListener('click', init)




