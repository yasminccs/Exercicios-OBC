const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Posters = require("./entities/Posters")
const User = require("./entities/User")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
        return App.#database.find('users')
    }

    createAuthor(name, nacionality, bio){
        const author = new Author(name, nacionality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBookInStock(bookName, quantity){
        App.#database.addBookToStock(bookName, quantity)
    }

    getBook(){
        return App.#database.find('books')
    }

    createPosters(name, description, price, height, width, inStock){
        const poster = new Posters(name, description, price, height, width, inStock)
        App.#database.savePosters(poster)
    }

    addPosterInStock(posterName, quantity){
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters(){
        return App.#database.find('posters')
    }

    createOrder(items, user){
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book){
                App.#database.removeBookToStock(product.name, quantity)
            } else if(product instanceof Posters){
                App.#database.removePostersToStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#database.find('orders')
    }

    showDatabase(){
        return App.#database.showStorage()
    }
}