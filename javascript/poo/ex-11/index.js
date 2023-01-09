const App = require("./App")

const app = new App()

App.newUser('Fulano da Silva', 'fulano@email.com')
App.newUser('Ciclano Silva', 'ciclano@email.com')

App.deposits('fulano@email.com', 500)

App.changeLoanRate(20)
App.loans('fulano@email.com', 2000, 2)

App.transfers('fulano@email.com', 'ciclano@email.com', 100)

//console.log(app.getUsers)
//console.log(App.findEmail('fulano@email.com').account)
//console.log(App.findEmail('ciclano@email.com').account.allLoans[0])
console.log(App.findEmail('fulano@email.com').account.allLoans[0].installments)
