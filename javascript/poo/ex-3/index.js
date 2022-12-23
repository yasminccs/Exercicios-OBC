//ASSOCIAÇÃO

const Author = require('./Author.js')

const johnDoe = new Author('John Doe')
const post = johnDoe.newPost('Como fazer bolo', 'Vamos começar pegando a farinha...')

const fulano = new Author('Fulano de Tal')
const post1 = fulano.newPost('DIY de copo', 'Comece pegando uma garrafa pet e tesoura....')

post1.addComment('João', 'Incrível!!')
post1.addComment('Karina', 'Genial demais.')
post1.addComment('Patricia', 'Vou fazer hoje mesmo.')

post.addComment('Maria', 'Muito boa a receita!')
post.addComment('Lucas', 'Bem fácil mesmo.')
post.addComment('Kebler', 'Adorei.')

console.log(johnDoe)
console.log(post)
console.log(fulano)
console.log(post1)