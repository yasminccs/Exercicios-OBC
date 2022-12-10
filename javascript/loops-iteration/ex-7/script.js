let nmr = Number(prompt('Digite o número que deseja realizar a tabuada de 1 a 20.'))
let result = ''
for(let i = 1; i <= 20; i++){
   result += `${nmr} x ${i} = ${nmr*i}\n`
}
alert(`Resultado:\n${result}`)