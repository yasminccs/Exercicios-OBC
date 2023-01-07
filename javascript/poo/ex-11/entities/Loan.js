module.exports = class Loan {
    static #interestRate
    constructor(interestRate){
        this.interestRate = interestRate
    }

    static get getRate(){
        return this.#interestRate
    }

    static set newRate(num){
        
    }
}