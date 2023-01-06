const App = require('./App')

const app = new App()

app.createAuthor('Mary Shelly', 'English', '...')
app.createAuthor('Robert Cecil Martin', 'American', '...')
const authors = app.getAuthors()

app.createBook('Frankenstein', '...', 'Romance gótico', 304, authors[0], '...', 39.90, 100)
app.createBook('Clean Code', '...', 'Educativo', 425, authors[1], 56.90, 100)
const books = app.getBook()

app.createUser('Yasmin', 'yasmin@email.com', 123456)
const users = app.getUsers()

app.showDatabase()

const items = [
    {
        product: books[0],
        quantity: 1
    },

    {
        product: books[1],
        quantity: 2
    }
]

app.createOrder(items, users[0])

app.showDatabase()

