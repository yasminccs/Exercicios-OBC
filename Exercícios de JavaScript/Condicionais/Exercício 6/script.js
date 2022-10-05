let nmr = Number(prompt("Digite a medida em metros."));
let menu = prompt(
  "Qual unidade de medida você deseja realizar a conversão?\n\n1- milímetro (mm)\n2- centímetro (cm)\n3- decímetro (dm)\n4- decâmetro(dam)\n5- hectômetro (hm)\n6- quilômetro (km)"
);

let result;

switch(menu){
    case '1':
        result = nmr/1000
        alert(`A conversão de ${nmr} metros para milímetros: ${result} mm.`)
        break
    case '2':
        result = nmr/100
        alert(`A conversão de ${nmr} metros para centímetros: ${result} cm.`)
        break
    case '3':
        result = nmr/10
        alert(`A conversão de ${nmr} metros para decímetros: ${result} dm.`)
        break
    case '4':
        result = nmr*10
        alert(`A conversão de ${nmr} metros para decâmetros: ${result} dam.`)
        break
    case '5':
        result = nmr*100
        alert(`A conversão de ${nmr} metros para hectômetros: ${result} hm.`)
        break
    case '6':
        result = nmr*1000
        alert(`A conversão de ${nmr} metros para quilômetros: ${result} km.`)
        break
    default:
        alert('Opção inválida.')
}
