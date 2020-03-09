// File Name: app.js
//
// This is the app for the Dungeon Game.
//
// Author: Bryant Phan

//Variables
const readline = require('readline-sync'), chalk = require('chalk'),  dungeonGame = require('./dungeonGame.js')

let monstHP = 125, playerHP = 100, turnCount = 0, command = '', atkDmg = 0, healthPotion = 30, chance = 0, item = '', play = 'Yes'

//Prompt
console.log(chalk.blueBright('You ') + chalk.red('encounter a ') + chalk.green('monster') + ':')
while (play == 'Yes' || 'yes') {
    while (playerHP > 0 && monstHP > 0) {
        //Player Action
        if (turnCount == 0 && playerHP > 0) {
            command = readline.question('Attack\nInventory\nRun\n')
            //Player Action
            if (command == 'Attack') {
                monstHP = dungeonGame.playerAtk(atkDmg, monstHP)
            }
            else if (command == 'Inventory'){
                playerHP = dungeonGame.inventory(item, playerHP, healthPotion)
            }
            else if (command == 'Run'){
                console.log('There is no escape.')
            }
            else {
                console.log('This program is case-sensitive.')
            }
            turnCount = 1
        }

        //Monster Action
        else if(turnCount == 1 && monstHP > 0) {
            playerHP = dungeonGame.monstAtk(monstHP, chance, atkDmg, playerHP)
            turnCount = 0
        }
    }

    //Ending
    if (monstHP <= 0){
        console.log(chalk.green('The Monster ') +  'has lost its health.')
        console.log('Congratulations! ' + chalk.blueBright('You ') + 'defeated ' + chalk.green('The Monster') + '!')
    }
    else {
        console.log(chalk.blueBright('You ') + 'died a horrible and painful death.')
    }

    //Continue?
    play = readline.question('Do you want to continue? [Yes/No] \n')
    if (play == 'Yes') {
        monstHP = 125, playerHP = 100, turnCount = 0, command = '', atkDmg = 0, healthPotion = 30, chance = 0, item = ''
    }
    else {
        console.log('Okay, bye then.')
        process.exit()
    }
}