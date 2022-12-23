//HERANÇA

class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getArea(){
        return this.price / this.area
    }
}

class Apartment extends Property{
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

class House extends Property{}

const newProperty = new Property(20, 150000)
//console.log(newProperty)
//console.log(newProperty.getArea())

const newHouse = new House(30, 150000)
//console.log(newHouse)
//console.log(newHouse.getArea())


const newApartment = new Apartment('401', 60, 120000)
console.log(newApartment)
console.log(newApartment.getArea())
console.log(newApartment.getFloor())