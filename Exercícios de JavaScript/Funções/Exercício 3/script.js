function at (){
    const a = Number(prompt('Qual a base do triângulo?'))
    const b = Number(prompt('Qual a altura do triângulo?')) 
    return a * b / 2
}
function ar (){
    const a = Number(prompt('Qual a base do retângulo?'))
    const b = Number(prompt('Qual a altura do retângulo?')) 
    return a * b
}
function aq (){
    const a = Number(prompt('Qual o lado do quadrado?')) 
    return a ** 2
}
function atz (){
    const a = Number(prompt('Qual a base maior do trapézio?'))
    const b = Number(prompt('Qual a base menor do trapézio?'))
    const c = Number(prompt('Qual a altura do trapézio?'))
    return (a + b) * c / 2
}
function ac (){
    const a = Number(prompt('Informe o raio do círculo.'))
    return 3.14 * a ** 2
}
function menu(){
    return prompt('Bem-vindo a Calculadora Geométrica!\nEscolha uma das opções abaixo:\n\n1 - Calcular área do triângulo\n2 - Calcular área do retângulo\n3 - Calcular área do quadrado\n4 - Calcular área do trapézio\n5 - Calcular área do círculo\n6 - Sair')
}
function run(){
    let option = ''
    do {
        option = menu()
        let result
        switch(option){
            case '1':
                result = at()
                break
            case '2':
                result = ar()
                break
            case '3':
                result = aq()
                break
            case '4':
                result = atz()
                break
            case '5':
                result = ac()
                break
            case '6':
                alert('Programa encerrado.')
                break
            default:
                alert('Opção inválida.')
                break
        }
        if(result){
            alert(`Área total: ${result}`)
        }
    } while (option !== "6")
}
run()