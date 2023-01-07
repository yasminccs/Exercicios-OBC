const Installment = require("./Installment")

module.exports = class Loan {
    static #interestRate = 1.05

    constructor(loanValue, installments){
       this.loanValue = loanValue
       this.installments = []
       for(let i = 1; i <= installments; i++){
        this.installments.push(new Installment((loanValue * Loan.#interestRate) / installments, i))
       }

       this.createDate = new Date()
    }

    static get getRate(){
        return Loan.#interestRate
    }

    /**
     * @param {number} num
     */
    static set newRate(num){
       return Loan.#interestRate = 1 + (num / 100)
    }
}

// Loan.newRate = 40
// const newLoan = new Loan(2000, 2)
// console.log(Loan.getRate)
// console.log(newLoan)
