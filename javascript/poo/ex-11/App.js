const User = require("./entities/User")
const Account = require("./Account")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const Installment = require("./entities/Installment")
const Loan = require("./entities/Loan")

//NÃO ESQUECER DO MODULE DO APP

class App {
    static #allUsers = []

    static newUser(fullName, email){
        const emailUserExists = App.#allUsers.find(e => e.email === email)
        if(!emailUserExists){
            const newUser = new User(fullName, email)
            App.#allUsers.push(newUser)
            console.log('Conta criada com sucesso!')
        } else {
            console.log('O email informado já está sendo utilizado.')
        }
    }

    static findUserByEmail(email){
        const existsUser =  App.#allUsers.find(e => e.email === email)
        if (existsUser){
            return `Nome completo do usuário informado: ${existsUser.fullName}`
        } else {
            return 'O email do usuário informado não foi encontrado.'
        }
    }

    static deposits(user, value){
        const deposit = new Deposit(value)
        const addDeposit = new Account(user)
        addDeposit.newDeposit(deposit)
    }

    static transfers(senderUser, receiveUser, value){
        const transfer = new Transfer(senderUser, receiveUser, value)
        const addTransfer = new Account(receiveUser)
        addTransfer.newTransfer(transfer)
    }

    static loans(user, value, parcels){
        const loan = new Loan(value, parcels)
        const addLoan = new Account(user)
        addLoan.newLoan(loan)
    }

    //add metodo para alterar taxa dos emprestimos

    get getUsers(){
        return App.#allUsers
    }
}

// const newApp = new App()
// App.newUser('Yasmin', 'yas@email.com')
// console.log(newApp.getUsers)
// console.log(App.findUserByEmail('yas@email.com'))