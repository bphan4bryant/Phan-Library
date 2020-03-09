#Author: Bryant Phan
#Text-based adventure set in dungeon.
import random
#Variables
monstHP = 125
playerHP = 100
attDmg = 0
healthPotion = 30
chance = 0
command = ''
#Prompt
print("You encounter a monster:")
while monstHP > 0 and playerHP > 0:
  command = input("Attack\nInventory\nRun\n")
  #Player Action
  if command == 'Attack':
    attDmg = random.randint(15,25)
    monstHP = monstHP - attDmg
    print("You swing your sword.")
    print("You deal ",attDmg, "damage to the monster.")
    print("The monster now has ",monstHP, "health.")
  elif command == 'Inventory':
    item = input("Choose One:\nHealth Potion")
    if item == 'Health Potion':
      playerHP = playerHP + healthPotion
      print("You now have ",playerHP, "health.")
    else:
      print("That is not an item.")
  elif command == 'Run':
    print("There is no escape.")
  else:
    print("You skip your turn.")
  #Monster Attacks
  if monstHP > 0:
    chance = random.randint(0,2)
    if chance < 2:
      print("The monster attacks.")
      attDmg = random.randint(20,25)
      playerHP = playerHP - attDmg
      print("You take ",attDmg, " Damage")
      print("You now have ",playerHP, "health.")
    else:
      print("The monster is too tired to move.")
if monstHP < 0:
  print("Congratulations! You defeated the monster!")
else:
  print("You died a horrible and painful death.")

