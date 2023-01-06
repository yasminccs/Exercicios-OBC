module.exports = class Order{
    #user
    #items
    #total
    constructor(items, user){
        items.array.forEach( ({ products, quantity }) => {
            if (quantity > products.inStock){
                throw new Error('Quantidade insuficiente no estoque!')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, { product, quantity }) => sum + ( product * quantity), 0)
    }

    get data(){
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}