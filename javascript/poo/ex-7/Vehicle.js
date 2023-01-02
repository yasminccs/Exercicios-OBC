//POLIMORFISMO

class Vehicle{
    move(){
        console.log('O veículo está em movimento')
    }
}

class Car extends Vehicle{
    move(){
        console.log('O carro está em movimento')
    }
}

class Ship extends Vehicle{
    move(){
        console.log('O navio está em movimento')
    }
}

const vehicle = new Vehicle()
console.log(vehicle.move())

const car = new Car()
console.log(car.move())

const ship = new Ship()
console.log(ship.move())

function start(vehicle){
    console.log('Iniciando partida...')
    vehicle.move()
}

start(vehicle)
start(car)
start(ship)