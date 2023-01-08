module.exports = class Account {
    #sale
    constructor(user){
        this.#sale = 0
        this.user = user
        this.allDeposits = []
        this.allLoans = []
        this.allTransfers = []
    }

    get sale(){
        return this.#sale
    }

    newDeposit(deposit){
        this.#sale += deposit.value
        this.allDeposits.push(deposit)
    }

    newLoan(loan){
        this.#sale += loan.loanValue
        this.allLoans.push(loan)
    }

    newTransfer(transfer){
        if (transfer.senderUser.email === this.user.email) {
            this.#sale -= transfer.value
            this.allTransfers.push(transfer)
        } else if (transfer.receiveUser.email === this.user.email){
            this.#sale += transfer.value
            this.allTransfers.push(transfer)
        }
    }
}

