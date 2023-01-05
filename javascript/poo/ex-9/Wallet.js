//ACESSADORES

class Wallet{
    #amount
    #username

    constructor(){
        this.#amount = 100.99 * 100 //retorna 10099
    }

    get amount(){
        return this.#amount / 100 //volta 100.99
    }

    set username(newUsername){
        if (typeof newUsername === 'string'){
            this.#username = newUsername
        } else {
            console.log('não atribuído')
        }
    }

    get username(){
        return this.#username
    }
}

const newWallet = new Wallet()
console.log(newWallet.amount)

newWallet.username = 'Yasmin'
console.log(newWallet.username)

newWallet.username = 12345
console.log(newWallet.username)