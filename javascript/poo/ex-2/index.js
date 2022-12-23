//ASSOCIAÇÃO
//1º forma

const Address = require("./Address");
const Person = require("./Person");

const address = new Address('25 de março', 234, 'Madureira', 'Rio de Janeiro', 'RJ')
const johnDoe = new Person('John Doe', address)
console.log(johnDoe)
console.log(johnDoe.address.fullAddress())


//2º forma
// const Person = require("./Person");

// const johnDoe = new Person('John Doe', '25 de março', 234, 'Madureira', 'Rio de Janeiro', 'RJ')
// console.log(johnDoe)
// console.log(johnDoe.address.fullAddress())