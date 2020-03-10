#File Name: dungeonGameApp.py
#This is the application which runs dungeonGame
#Author: Bryant P.

import random

#Setup
class Monster():
    def __init__(self, health, minDmg, maxDmg, maxChance):    
        self.health = health
        self.minDmg = minDmg
        self.maxDmg = maxDmg
        self.maxChance = maxChance
    
    def takeDmg(self, dmg):
        self.health -= dmg
        print('You deal', dmg, 'damage.\nThe monster now has',self.health, 'health.')

    def chanceEvent(self):
        self.chance = random.randint(0, self.maxChance)
        return self.chance

class Player():
    def __init__(self, health, minDmg, maxDmg, inventory, run, choice):
        self.health = health
        self.minDmg = minDmg
        self.maxDmg = maxDmg
        self.inventory = inventory
        self.run = run
        self.choice = choice

    def takeDmg(self, dmg):
        self.health -= dmg
        print('The monster attacks, dealing', dmg, 'damage.\nYou now have',self.health, 'health.')
    
    def useItem(self, item):
        if item in range(len(self.inventory)+1): #Make inventory with dictionary
            self.health += 40
            print('You heal for 40 HP.')
            self.inventory.remove(self.inventory[item-1])
        else:
            print('You have none of that item.')
 
def choiceEvent(player, monster):
    player.choice = int(input('Pick a number:\n(1) Attack\n(2) Inventory\n(3) Run\n'))

def choiceLogic(player, monster):
        if player.choice == 1:
            atkEvent(player, monster)
        elif player.choice == 2:
            if len(player.inventory) > 0:
                print('(1)',player.inventory[0])
                item = int(input('Choose one.\n'))
                player.useItem(item)
            else:
                print('You have no items left.')
        elif player.choice == 3:
            player.run = True
        if player.run == False:
            if monster.chanceEvent() == 0: #Chance not working
                print('The monster is too tired to move.')
            else:
                atkEvent(monster, player)

def atkEvent(attacker, defender):
    dmg = random.randint(attacker.minDmg, attacker.maxDmg)
    defender.takeDmg(dmg)

def endingEvent(player, monster):
    if player.health >= 0 and monster.health < 0:
        print('You have slain the monster!\nGo collect the treasure!')
    elif player.health <= 0 and monster.health > 0:
        print('You have been bested by the monster.\nYou get no treasure.')
    elif player.run == True:
        print('You escape the dungeon with your life,\nbut not the treasure.')
    else:
        print('Humorously, you defeat eachother.\nNo one gets the treasure.')
#Prompts
def main():
    player1 = Player(125, 20, 30, ['Health Potion'], False, 0)
    monster1 = Monster(150, 25, 35, 2)

    print('You enter the dungeon.')
    print('You encounter a monster.\nIt is gaurding a hoarde of treasure.')

    while player1.health > 0 and monster1.health > 0 and player1.run == False:
        choiceEvent(player1, monster1)
        choiceLogic(player1, monster1)
    endingEvent(player1, monster1)
#Game
main()
    
    


