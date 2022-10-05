let menu
menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')

do {
   switch(menu){
    case '1':
        alert('Opção escolhida: 1 (um)')
        menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')
        break
    case '2':
        alert('Opção escolhida: 2 (dois)')
        menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')
        break
    case '3':
        alert('Opção escolhida: 3 (três)')
        menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')
        break
    case '4':
        alert('Opção escolhida: 4 (quatro)')
        menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')
        break
    default:
        alert('Opção inválida.')
        menu = prompt('Escolha uma das opções abaixo:\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar')
        break
   }
} while (menu != '5')

alert('Programa encerrado.')