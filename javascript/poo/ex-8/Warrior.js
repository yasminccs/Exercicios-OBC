import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(shieldScore, position, name, lifeScore, attack, defense){
        super(name, lifeScore, attack, defense)
        this.shieldScore = shieldScore
        this.position = position
    }

    attackStart(){
        if (this.position === 'ataque'){
            console.log('Modo de ataque.')
        } else {
            console.log('Modo defesa.')
        }
    }

    alternativePosition(){
        if (this.position === 'defesa'){
            return Number(this.shieldScore + this.defense)
        } else {
            return this.defense
        }
    }
}