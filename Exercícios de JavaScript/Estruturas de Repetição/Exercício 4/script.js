let i = 0
let menu 
let cities = ""
const name = prompt('Qual é o seu nome?')
menu = prompt('Já visitou alguma cidade?\n1 - Sim \n2 - Não')

while(menu == "1"){
    i++
    city = prompt('Qual cidade você visitou?')
    cities += '- ' + city + "\n"
    menu = prompt('Já visitou alguma outra cidade?\n1 - Sim \n2 - Não')
} 

alert(`Turista: ${name}\nQuantidade de cidade(s) visitada(s): ${i} cidade(s).\nCidades visitadas: \n${cities}`)