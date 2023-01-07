const App = require('./App')

const app = new App()

app.createAuthor('Mary Shelly', 'English', '...')
app.createAuthor('Robert Cecil Martin', 'American', '...')
const authors = app.getAuthors()

app.createBook('Frankenstein', '...', 'Romance gótico', 304, authors[0], '...', 39.99, 100)
app.createBook('Clean Code', '...', 'Educativo', 425, authors[1], '...', 56.99, 100)
const books = app.getBook()

app.createPosters('Poster Frankenstein', '...', 29.99, 40, 30, 200)
const posters = app.getPosters()

app.createUser('Yasmin', 'yasmin@email.com', 123456)
const users = app.getUsers()

const items = [
    {
        product: books[0],
        quantity: 1
    },

    {
        product: books[1],
        quantity: 2
    },

    {
        product: posters[0],
        quantity: 3
    }
]

app.createOrder(items, users[0])

app.showDatabase()