import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(magicScore,name, lifeScore, attack, defense){
        super(name, lifeScore, attack, defense)
        this.magicScore = magicScore
    }

    attackStart(targetCharacter){
        return Number((this.attack + this.magicScore) - targetCharacter.defense)
    }

    highLifeScore(targetCharacter){
        return Number((2 * this.lifeScore) + targetCharacter.lifeScore)
    }
}