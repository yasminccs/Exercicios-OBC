let queue = []
let menu = ''
do {
    let position = ''
    for(let i = 0; i < queue.length; i++){
    position += (i+1) + 'º' + " - " + queue[i] + '\n'
}

menu = prompt(`Lista de espera:\n${position}\nEscolha uma das opções abaixo.\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair`)

switch(menu){
    case "1":
        let add = prompt('Qual o nome do novo paciente?')
        queue.push(add)
        break
    case "2":
        let consult = queue.shift()
        if(consult){
            alert(`Paciente ${consult} consultado(a) e retirado(a) da fila.`)
        } else {
            alert('Não há pacientes na fila.')
        }
        break
    case "3":
        alert('Programa encerrado.')
        break
    default:
        alert('Opção inválida.')
        break
        }
} while(menu != "3")
    