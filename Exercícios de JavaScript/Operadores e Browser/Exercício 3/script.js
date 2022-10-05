let firstName = prompt('Qual seu primeiro nome?')
let lastName = prompt('Qual seu sobrenome?')
let campus = prompt('Qual será seu campo de estudo?')
let date = prompt('Qual seu ano de nascimento?')
let age = Number(date)
let year = 2022 - age

let dados = alert(`Nome completo: ${firstName} ${lastName}.
                   \nCampos de estudo: ${campus}.
                   \nIdade: ${year} anos.`)