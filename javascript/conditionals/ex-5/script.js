const a = prompt('Qual será o nome do personagem?')
let attackPower = Number(prompt(`Digite o valor do poder de ataque de "${a}"?`))
const b = prompt('Qual será o nome do outro personagem?')
let lifePoints = Number(prompt(`Quanto será a quantidade de pontos de vida de "${b}"?`))
let defensePower = Number(prompt(`Digite o valor do poder de defesa de "${b}"?`))
let escudo = confirm(`Se "${b}" possuir um escudo, clique em "ok" para confirmar.`)

let damage
let result
let shield

if(attackPower > defensePower && escudo == false){
    damage = attackPower - defensePower
} else if(attackPower > defensePower && escudo == true){
    damage = (attackPower - defensePower) / 2
} else if(attackPower <= defensePower){
    damage = 0
    result = lifePoints
}

result = damage - lifePoints

if(escudo == true){
    shield = "Possui"
} else {
    shield = 'Não possui'
}

alert(`Informações finais sobre os personagens.\n\nNome do primeiro personagem: ${a}\nPoder de ataque: ${attackPower}\n\nNome do segundo personagem: ${b}\nPontos de vida: ${lifePoints}\nPoder de defesa: ${defensePower}\nPossui escudo: ${shield}\nQuantidade de danos: ${damage}\nQuantidade de pontos de vida restantes: ${result}`)