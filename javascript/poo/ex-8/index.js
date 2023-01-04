const Character = require("./Character.js")
const Thief = require("./Thief.js")
const Mage = require("./Mage.js")
const Warrior = require("./Warrior.js")

const newCharacter = new Character('Philip', 130, 15, 5)

const newCharacterThief = new Thief('Elisabeth', 140, 22, 8)

const newMage = new Mage('Harry', 90, 4, 2, 14)

const newWarrior = new Warrior('John', 200, 14, 12, 4)

console.table({newCharacter, newCharacterThief, newMage, newWarrior})

newCharacter.attackStart(newCharacterThief)
newCharacterThief.attackStart(newCharacter)

console.table({newCharacter, newCharacterThief, newMage, newWarrior})

newMage.attackStart(newCharacter)
newMage.highLifeScore(newCharacter)

console.table({newCharacter, newCharacterThief, newMage, newWarrior})

newWarrior.attackStart()
newWarrior.alternativePosition()

console.table({newCharacter, newCharacterThief, newMage, newWarrior})


