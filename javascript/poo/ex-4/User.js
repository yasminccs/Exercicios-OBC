//ENCAPSULAMENTO

class Account {
    #password
    #balance
    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        } else {
            return 'Email e senha não conferem.'
        }
    }
}

const user = {
    email: "yasmin@email.com",
    password: "123456"
}

const usuario = new Account(user)

console.log(usuario.getBalance("yasmin@email.com", "123456"))