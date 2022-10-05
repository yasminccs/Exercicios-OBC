//FORMA DO EXERCÍCIO PROPOSTO

let dateInitial = prompt("Informe a data de partida da aeronave. (no formato DD/MM/YYYY)")
let deportMoment = moment(dateInitial, "DD/MM/YYYY")
let today = moment() // só para demarcar a data atual

let differentDates = today - deportMoment // o moment transforma as datas em milisegundos, então a diferença dará na subtração dos milisegundos de cada um

let chosenOptions = prompt("Escolha como será mostrado o tempo de voo da aeronave:" + "\n1 - Segundos" + 
"\n2 - Minutos" + "\n3 - Horas" + "\n4 - Dias" + "\n5 - Anos")

if(chosenOptions == "1"){
    let seconds = Math.round(differentDates / 1000)
    alert("Tempo de voo: " + seconds + " segundos.")
} else if(chosenOptions == "2"){
    let minutes = Math.round(differentDates / 1000 / 60)
    alert("Tempo de voo: " + minutes + " minutos.")
} else if(chosenOptions == "3"){
    let hours = Math.round(differentDates / 1000 / 3600)
    alert("Tempo de voo: " + hours + " horas.")
} else if(chosenOptions == "4"){
    let days = Math.round(differentDates / 1000 / 3600 / 24)
    alert("Tempo de voo: " + days + " dias.")
} else if(chosenOptions == "5"){
    let years = Math.round(differentDates / 1000 / 3600 / 24 / 365)
    alert("Tempo de voo: " + years + " anos.")
}
else {
    alert("Opção inválida.")
}



//COMO EU PREFIRO

// const date = prompt('Informe a data de nascimento no formato DD/MM/YYYY.')
// const formatDate = moment(date, 'DD/MM/YYYY')
// const atualDate = moment()
// const deport = atualDate - formatDate
// let menu = ''
// let conts

// while(menu !== '6'){
//     menu = prompt('Escolha uma das opções abaixo para fazer a conversão.\n\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n5 - Anos\n6 - Sair')
//     switch(menu){
//         case '1':
//             conts = Math.round(deport / 1000)
//             alert(`Data: ${date}\nConversão para segundos: ${conts} segundos.`)
//             break
//         case '2':
//             conts = Math.round(deport / 1000 / 60)
//             alert(`Data: ${date}\nConversão para minutos: ${conts} minutos.`)
//             break
//         case '3':
//             conts = Math.round(deport / 1000 / 3600)
//             alert(`Data: ${date}\nConversão para horas: ${conts} horas.`)
//             break
//         case '4':
//             conts = Math.round(deport / 1000 / 3600 / 24)
//             alert(`Data: ${date}\nConversão para dias: ${conts} dias.`)
//             break
//         case '5':
//             conts = Math.round(deport / 1000 / 3600 / 24 / 365)
//             alert(`Data: ${date}\nConversão para anos: ${conts} anos.`)
//             break
//         case '6':
//             alert('Programa finalizado.')
//             break
//         default:
//             alert('Opção inválida.')
//             break
//     }
// }