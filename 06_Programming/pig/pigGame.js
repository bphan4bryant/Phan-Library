// File Name: pigGame.js
//
// This is the back-end of the pig game app.
//
// Author: Bryant Phan

/* This is a normal 6 sided dice except 1 is a value of 0*/
function rollDice() {
    const dice = Math.ceil(Math.random()*6)

    if(dice === 1) {
        return 0
    } else {
        return dice
    }
}

function printBoard(cPlayer, p1Score, p2Score, dice) {
    let ans = '\n'
    if(cPlayer === 1) {
        ans += '\t [Player 1] \t\t Player 2\n'
        ans += '\t Score ' + p1Score + '\t\t Score ' + p2Score + '\n'
        ans += '\t Dice ' + dice + '\n\n'
    } else {
        ans += '\t Player 1 \t\t [Player 2]\n'
        ans += '\t Score ' + p1Score + '\t\t Score ' + p2Score + '\n'
        ans += '\t\t\t\t Dice ' + dice + '\n\n'
    }
    console.log(ans)
}

module.exports = {
    rollDice: rollDice,
    printBoard: printBoard,
}