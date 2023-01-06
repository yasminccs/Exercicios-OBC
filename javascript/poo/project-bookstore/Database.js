module.exports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
       return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBooksByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBooksByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity){
        const book = this.findBooksByName(bookName)
        book?.addStock(quantity)
    }

    removeBookToStock(bookName, quantity){
        const book = this.findBooksByName(bookName)
        book?.removeStock(quantity)
    }

    findPostersByName(posterName){
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePosters(poster){
        const posterExists = this.findPostersByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPostersByName(posterName)
        poster?.addStock(quantity)
    }

    removePostersToStock(posterName, quantity){
        const poster = this.findPostersByName(posterName)
        poster?.removeStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists){
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order) 
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}