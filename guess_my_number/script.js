'use strict';
let randomNumber = Math.floor(Math.random() * 20) + 1;
const checkbtn = document.querySelector('.check')
const againbtn = document.querySelector('.again')
console.log(randomNumber)
let score = 20
let highscore = 0

const displaymsg = (msg) => {
    document.querySelector('.message').textContent = msg
    if (msg.includes('💥 you are out of score')) {
        document.body.style.backgroundColor = 'red'
    }
}

const displayScore = (score) => {
    document.querySelector('.score').textContent = score
}

checkbtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displaymsg('💥 no number found')
    } else if (guess > 20 || guess < 1) {
        displaymsg('🥱 only numbers btwn 1 - 20')
    } else if (guess === randomNumber) {
        if (score > 1) {
            displaymsg('🎉 correct answer')
            document.body.style.backgroundColor = 'green'
            document.querySelector('.number').textContent = randomNumber
            displayScore(score)
            document.querySelector('.guess').disabled = true;
            checkbtn.disabled = true;
            if (score > highscore) {
                highscore = score
                document.querySelector('.highscore').textContent = highscore
            }
        } else {
            displaymsg('💥 you are out of score')
        }
    } else if (guess === randomNumber - 1) {
        if (score > 1) {
            displaymsg('📉 low')
            score--
            displayScore(score)
        } else {
            displaymsg('💥 you are out of score')
        }
    } else if (guess === randomNumber + 1) {
        if (score > 1) {

            displaymsg('📈 high')
            score--
            displayScore(score)
        } else {
            displaymsg('💥 you are out of score')
        }
    } else if (guess <= randomNumber - 2) {
        if (score > 1) {
            displaymsg('📉 Too low')
            score--
            displayScore(score)

        } else {
            displaymsg('💥 you are out of score')
        }
    } else if (guess >= randomNumber - +2) {
        if (score > 1) {

            displaymsg('📈 Too high')
            score--
            displayScore(score)
        } else {
            displaymsg('💥 you are out of score')
        }
    }
})

againbtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20
    checkbtn.disabled = false;
    displaymsg('start guessing...')
    document.querySelector('.guess').disabled = false;
    document.querySelector('.score').textContent = 20
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
})