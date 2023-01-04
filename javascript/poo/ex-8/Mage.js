const Character = require("./Character.js")

class Mage extends Character{
    constructor(name, life, attack, defense, magicScore){
        super(name, life, attack, defense)
        this.magicScore = magicScore
    }

    attackStart(targetCharacter){
        return Number( targetCharacter.life -= (this.attack + this.magicScore) - targetCharacter.defense)
    }

    highLifeScore(targetCharacter){
        return Number(targetCharacter.life += (2 * this.life))
    }
}

module.exports = Mage