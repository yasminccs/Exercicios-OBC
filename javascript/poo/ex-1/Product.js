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
        return this.price*(percent/100)
    }
}

const productClient = new Product('Paleta de blush', 'possui 4 cores', 60)
productClient.addInStock(20)
console.log(productClient)
const valuePercent = productClient.calculateDiscont(25)
console.log(`Valor com desconto: R$${valuePercent}`)