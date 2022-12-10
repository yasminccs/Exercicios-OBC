const personNave = [ 
    ['Fenix', 8, true], 
    ['Golias', 10, true], 
    ['Helmet', 5, false], 
    ['Elemental', 3, true], 
    ['Darwin', 15, false]
]
   
const nine = personNave
    .filter(name => name[1] > 9) 
    //['Golias', 10, true]
    //['Darwin', 15, false]
    .map(name => name[0])
    //'Golias'
    //'Darwin'

    //Usando .reduce() no lugar de .filter.map

    // const nine = personNave.reduce((acc, element) => {
    //     if(element[1] > 9){
    //     acc.push(element[0])
    //     } 
    //     return acc
    // }, [])

    
const indc = personNave.findIndex(idx => idx[2] === false)

const odd = personNave.map(name => name[0].toUpperCase())

alert(`Naves com mais de 9 tripulantes: ${nine.join(' e ')}\nPosição da primeira nave com engate pendente: ${indc+1}a posição\nNome de todas as naves: ${odd.join(' - ')}`)
