const Character = require("./Character.js")

class Warrior extends Character{
    constructor(name, life, attack, defense, shieldScore){
        super(name, life, attack, defense)
        this.shieldScore = shieldScore
        this.position = 'attacking'
    }

    attackStart(targetCharacter){
        if (this.position === 'attacking'){
            super.attack(targetCharacter)
        } else {
            return 'Modo defesa'
        }
    }

    alternativePosition(){
        if (this.position === 'attacking'){
            this.position = 'defesa'
            return Number(this.defense += this.shieldScore)
        } else {
            this.position = 'attacking'
            this.defense -= this.shieldScore
            return this.defense
        }
    }
}

module.exports = Warrior