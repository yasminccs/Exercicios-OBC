let a = prompt('Digite a palavra abaixo para ser analisada.')
let invertedName = ''

for(let i = a.length - 1; i >= 0; i--){
    invertedName += a[i]
}

if(invertedName == a){
    alert(`A palavra "${a}" é um palíndromo.\nLida de trás para frente: "${invertedName}"`)
} else {
    alert(`A palavra "${a}" não é um palíndromo.\nLida de trás para frente: "${invertedName}"`)
}