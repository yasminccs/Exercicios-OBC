let cards = []
let menu = ''

do {
    menu = prompt(`Quantidade atual de cartas no baralho:\n${cards.length} cartas.\nEscolha uma das opções abaixo:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`)

    switch(menu){
        case '1':
            let add = prompt('Qual carta deve ser adicionada ao baralho?')
            cards.unshift(add)
            break
        case '2':
            let remove = cards.shift()
            if(remove){
                alert(`Carta retirada: ${remove}`)
            } else {
                alert('Não há cartas no baralho.')
            }
            break
        case '3':
            alert('Programa encerrado.')
            break
        default:
            alert('Opção inválida.')

    }
} while(menu != '3')