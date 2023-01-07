const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")

module.exports = class Account {
    #sale

    constructor(user){
        this.user = user
        this.allDeposits = []
        this.allLoans = []
        this.allTransfers = []
    }

    newDeposit(value){
        this.#sale += value
        this.allDeposits.push(new Deposit(value))
    }

    newLoan(value, parcels){
        this.#sale += value
        this.allLoans.push(new Loan(value, parcels))
    }

   
}

