class Character{
    constructor(name, life, attack, defense){
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }

    attackStart(targetCharacter){
        return Number(targetCharacter.life -= (this.attack - targetCharacter.defense))
    }
}

module.exports = Character
