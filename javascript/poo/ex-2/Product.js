class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addInStock(quantity){
        this.inStock += quantity
    }

    calculateDiscont(percent){
        this.price = this.price*(percent/100)
    }
}

const productClient = new Product('Paleta de blush', 'possui 4 cores', 60)
productClient.addInStock(20)
productClient.calculateDiscont(25)
console.log(productClient)