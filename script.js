let arr = []

let obj = {}
obj.name = 'Josefino'
obj.candidatos = ['Mateus', 'José']
arr.push(obj)

let obj2 = {}
obj2.name = 'Mariana'
obj2.candidatos = ['Karla', 'Thiago']
arr.push(obj2)

let obj3 = {}
obj3.name = 'Alisson'
obj3.candidatos = ['Mariano', 'Josefina']
arr.push(obj3)

// let index = Number(prompt('Informe o indice'))-1
// let remover = arr.splice(index,1)

let index = Number(prompt('Informe o indice'))-1
let indice = arr.indexOf(index)
if(index !== -1){ //~index
    let pp = arr.splice(index, 1)
}

console.log(arr)