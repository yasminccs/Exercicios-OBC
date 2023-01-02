export class Character{
    constructor(name, lifeScore, attack, defense){
        this.name = name
        this.lifeScore = lifeScore
        this.attack = attack
        this.defense = defense
    }

    attackStart(targetCharacter){ //personagem alvo de outra instancia de Character
        return Number(targetCharacter.lifeScore - (this.attack - targetCharacter.defense))
    }
}
