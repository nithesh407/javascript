'use strict';

const map = new Map([
    ['ques', 'who is my favaroite cricket player🏏?'],
    [1, 'sachin'],
    [2, 'dhoni'],
    [3, 'kholi'],
    [true, 'Correct answer 🎉'],
    [false, 'Try again!']
])

console.log(map.set('correct', 2))

console.log(map.get('ques'))
for (const [key, value] of map) {
    if (typeof key === 'number')
        console.log(`option ${key} : ${value}`)
}
const answer = Number(prompt('Enter the option'))
console.log(answer)

console.log(map.get(map.get('correct') === answer))

//convert map to array
console.log([...map])
console.log([...map.keys()])
console.log([...map.values()])

