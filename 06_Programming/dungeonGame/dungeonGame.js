// File Name: dungeonGame.js
//
// This is a text-based adventure based in a dungeon.
//
// Author: Bryant Phan

//Variables
const readline = require('readline-sync')
const chalk = require('chalk');

let monstHP = 125
let playerHP = 100
let atkDmg = 0
let healthPotion = 30
let chance = 0
let item = ''

//Functions
function playerAtk(atkDmg, monstHP) {
    atkDmg = Math.ceil(Math.random() * 11) + 10
    monstHP -= atkDmg
    console.log(chalk.blueBright('You ') +  'swing Your sword.')
    console.log(chalk.blueBright('You ') + 'deal ' + chalk.red(atkDmg) + ' damage to ' + chalk.green('The Monster') + '.')
    if (monstHP > 0) {
        console.log(chalk.green('The Monster ') +  'now has ' + chalk.red(monstHP) + ' health.')
    }
    return monstHP
}
function inventory(item, playerHP, healthPotion) {
    item = readline.question('Choose One:\nHealth Potion' + '\n')
    if (item == 'Health Potion') {
        playerHP += healthPotion
        console.log(chalk.blueBright('You ') + 'now have ' + chalk.red(playerHP) + ' health.')
    }
    else {
        console.log('That is not an item.')
    }
    return playerHP
}
function monstAtk(monstHP, chance, atkDmg, playerHP) {
    if (monstHP > 0) {
        chance = Math.ceil(Math.random() * 5)
        if (chance != 4) {
            console.log(chalk.green('The Monster ') +  'attacks.')
            atkDmg = Math.ceil(Math.random() * 11) + 15
            playerHP -= atkDmg
            console.log(chalk.blueBright('You ') + 'take ' + chalk.red(atkDmg) + ' Damage')
            if (playerHP > 0) {
                console.log(chalk.blueBright('You ') + 'now have ' + chalk.red(playerHP) + ' health.')
            }
            else {
                console.log(chalk.blueBright('You ') + 'have no health left')
            }
        }
        else{
            console.log(chalk.green('The Monster ') +  'is too tired to move.')
        }
    }
    return playerHP
}

module.exports = {
    playerAtk: playerAtk,
    inventory: inventory,
    monstAtk: monstAtk,
    monstHP: monstHP,
    playerHP: playerHP,
    atkDmg: atkDmg,
    healthPotion: healthPotion,
    chance: chance,
    item: item
}