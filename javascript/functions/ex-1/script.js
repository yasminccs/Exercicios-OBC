//DO JEITO PROPOSTO USANDO FUNÇÕES


let nameNave = prompt("Digite o nome da nave.")
let velocity = 0
let opctions = prompt("Escolha uma das seguintes opções:" + "\n\n1 - Acelerar a nave em 5km/s" + "\n2 - Desacelerar a nave em 5km/s" + "\n3 - Imprimir dados de bordo" + "\n4 - Sair do programa")
while(opctions != "4"){
    if(opctions == "1"){
        speedUp()
        menu();
    } else if(opctions == "2"){
        slowDown()
        menu()
    } else if(opctions == "3"){
        datas()
        menu()
    } else if(opctions < "1"){
        menu()
    } else if(opctions > "4"){
        menu()
    }
}
while(opctions == "4"){
    alert("Programa de bordo encerrado.")
    break
}
function menu(unity="km/s"){
    opctions = prompt("Escolha uma das seguintes opções:" + "\n\n1 - Acelerar a nave em 5km/s" + 
    "\n2 - Desacelerar a nave em 5km/s" + "\n3 - Imprimir dados de bordo" + "\n4 - Sair do programa")
}
function speedUp(unity="km/s"){
    velocity += 5
}
function slowDown(unity="km/s"){ 
    if(velocity > 0){
        velocity -= 5
  } else {
    velocity = 0
  }
}
function datas(unity="km/s"){
    alert("Nome da nave: " + nameNave + "\nVelocidade atual da nave: " + velocity + unity)
}


//ADICIONEI FUNCIONALIDADES Q QUERIA E SEM USAR FUNÇÕES

// const name = prompt('Informe o nome da nave.')
// let i = 0

// let menu = ''
// let total
// while(menu !== '4'){
//     menu = prompt('Escolha uma das opções abaixo.\n\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar a nave em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair')

//     switch(menu){
//         case '1':
//             total = i += 5
//             alert(`Acelerando a nave em ${total}km/s`)
//                 break
//         case '2':
//             total = i -= 5
//             if(total < 0){
//                 alert("Nave está parada. Velocidade atual 0km/s.")
//             } else {
//                 alert(`Desacelerando a nave em ${total}km/s`)
//             }
//                 break
//         case '3':
//             alert(`Nome da nave: ${name}\nVelocidade atual: ${total}km/s`)
//                 break
//         case '4':
//             alert(`Programa encerrado.`)
//                 break
//         default:
//             alert('opção inválida.')
//                 break
//     }
// }