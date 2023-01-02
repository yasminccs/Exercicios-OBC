import { Character } from "./Character.js";

export class Thief extends Character{
    constructor(name, lifeScore, attack, defense){
        super(name, lifeScore, attack, defense)
    }

    attackStart(targetCharacter){
        return Number(2*(this.attack - targetCharacter.defense))
    }
}