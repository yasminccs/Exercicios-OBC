const Character = require("./Character.js")

class Thief extends Character{
    attackStart(targetCharacter){
        return Number(targetCharacter.life -= (this.attack - targetCharacter.defense) * 2)
    }
}

module.exports = Thief