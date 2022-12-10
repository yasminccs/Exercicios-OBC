let carOne = prompt('Insira o nome do primeiro veículo.')
let carTwo = prompt('insira o nome do segundo veículo.')
let a = Number(prompt(`Insira a velocidade do veículo "${carOne}".`))
let b = Number(prompt(`Insira a velocidade do veículo "${carTwo}".`))

if(a > b){
    alert(`O veículo "${carOne}" é mais rápido em comparação ao veículo "${carTwo}"`)
} else if(b > a){
    alert(`O veículo "${carTwo}" é mais rápido em comparação ao veículo "${carOne}"`)
} else if(a == b){
    alert(`O veículo "${carOne}" tem a mesma velocidade que o veículo "${carTwo}"`)
}