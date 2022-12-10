let nameOld = prompt("Digite o NOME da pessoa mais VELHA.")
let ageOld = prompt("Digite a IDADE da pessoa mais VELHA.")

let nameYoung = prompt("Digite o NOME da pessoa mais NOVA.")
let ageYoung = prompt("Digite a IDADE da pessoa mais NOVA.")

let ageBoth = ageOld - ageYoung

let datas = alert("Nome da pessoa mais velha: " + nameOld + "\nIdade: " + ageOld + " anos" +
                  "\n\nNome da pessoa mais nova: " + nameYoung + "\nIdade: " + ageYoung + " anos" + 
                  "\n\nDiferença entre as idades: " + ageBoth + " anos")