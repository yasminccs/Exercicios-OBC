const User = require("./entities/User")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const Loan = require("./entities/Loan")

module.exports = class App {
    static #allUsers = []

    static findEmail(email){
        const emailUserExists = this.#allUsers.find(user => user.email === email)
        return emailUserExists ?? null
    }

    static newUser(fullName, email){
        const emailUserExists = App.findEmail(email)
        if(!emailUserExists){
            this.#allUsers.push(new User(fullName, email))
            console.log('Conta criada com sucesso!')
        } else {
            console.log('O email informado já está sendo utilizado.')
        }
    }

    static deposits(email, value){
        const findUser = App.findEmail(email)
        if (findUser){
            const deposit = new Deposit(value)
            findUser.account.newDeposit(deposit)
        }
    }

    static transfers(senderUser, receiveUser, value){
        const findReceive = App.findEmail(receiveUser)
        const findSender = App.findEmail(senderUser)
        if (findSender && findReceive){
            const transfer = new Transfer(findSender, findReceive, value)
            findSender.account.newTransfer(transfer)
            findReceive.account.newTransfer(transfer)
        }
        
    }

    static loans(email, value, parcels){
        const findUser = App.findEmail(email)
        if (findUser){
            const loan = new Loan(value, parcels)
            findUser.account.newLoan(loan)
        }
    }

    static changeLoanRate(newRate){
        Loan.newRate = newRate
    }

    get getUsers(){
        return App.#allUsers
    }
}