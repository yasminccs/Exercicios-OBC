//const dayjs = require("dayjs")
import dayjs from "dayjs"

function dateBirth (date) {

    const nowDate = dayjs()

    const nowAge = nowDate.diff(date, 'year')
    const nextBirthday = dayjs(date).add((nowAge + 1), 'year')
    const missDays = nextBirthday.diff(dayjs(), 'day').toString()

    return console.log(`Você tem: ${nowAge} anos.
Seu próximo aniversário será em: ${nextBirthday.format('DD/MM/YYYY')}.
Faltam: ${missDays} dias para seu aniversário.`)
}
dateBirth('2002-05-14')

    
