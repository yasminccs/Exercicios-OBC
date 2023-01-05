//ATRIBUTOS E MÉTODOS ESTÁTICOS

class Reservation {
    constructor(guests, room, day){
        this.guests = guests
        this.room = room
        this.day = day
        this.total = day * Reservation.daily
    }

    static daily = 150

    static returnDaily(){
        console.log(`A diária é de R$${Reservation.daily} reais`)
    }

    static get dailyPremium(){
        return Reservation.daily * 1.5
    }
}
Reservation.returnDaily()

console.log(`Reserva premium é de R$${Reservation.dailyPremium} reais`) //retorna 225

const r1 = new Reservation(4, '201', 5)
console.log(r1)

const r2 = new Reservation(2, '101', 2)
console.log(r2)

Reservation.daily = 200

const r3 = new Reservation(5, '102', 2)
console.log(r3)

console.log(`Reserva premium é de R$${Reservation.dailyPremium} reais`) //retorna 300