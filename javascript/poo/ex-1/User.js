class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(emailUser, passwordUser){
        if(emailUser === this.email && passwordUser === this.password){
            console.log('Login bem sucedido!')
        } else {
            console.log('Login mal sucedido!')
        }
    }
}

const person = new User('Yasmin Silva', 'joaninha123@lala.com', 1234)
person.login('joaninha123@lala.com', 12345)
console.log(person)