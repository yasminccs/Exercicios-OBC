const name = prompt('Informe o nome do piloto.')
const velocity = Number(prompt('A que velocidade gostaria de acelerar a nave?'))
const conf = confirm(`Acelerando para ${velocity} km/s. Confirmar?`)
if(velocity <= 0){
 alert('A nave está parada. Considere partir e aumentar a velocidade')
} else if (velocity < 40){
 alert('Você está devagar. Considere acelerar mais.')
} else if (velocity <= 80){
 alert('Parece uma boa velocidade a se manter.')
} else if (velocity <= 100){
 alert('Velocidade alta. Considere diminuir')
} else {
 alert('Velocidade perigosa. Controle automático ativado.')
}

alert(`Nome do piloto: ${name}\nVelocidade atual: ${velocity} km/s`)