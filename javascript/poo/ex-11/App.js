const User = require("./entities/User")
const Account = require("./Account")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const Installment = require("./entities/Installment")
const Loan = require("./entities/Loan")

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

    // static findUserByEmail(email){
    //     const findEmail = App.#allUsers.find(e => e.email === email)
    //     if (findEmail){
            
    //     }
    // }

    get getUsers(){
        return App.#allUsers
    }
}

const newApp = new App()
App.newUser('Yasmin', 'yas@email.com')
// const newApp2 = new App()
// App.newUser('Yasmin', 'yas@email.com')

console.log(newApp.getUsers)