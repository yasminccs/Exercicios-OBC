let initialMoney = Number(prompt('Qual a quantidade inicial de dinheiro disponível?'))
let menu = ''
let count;

do{
    menu = prompt(`Valor total: R$${initialMoney}. O que deseja fazer?\n1 - Adicionar\n2 - Descontar\n3 - Sair`)
   switch(menu){
    case '1':
        count = Number(prompt('Qual o valor a ser adicionado?'))
        initialMoney += count //initialMoney = initialMoney + count
        break
    case '2':
        count = Number(prompt('Qual o valor a ser descontado?'))
        initialMoney -= count  //initialMoney = initialMoney - count
        break
    case '3':
        alert('Programa encerrado.')
        break
    default:
        alert('Opção inválida.')
        break
   }
} while (menu != '3')