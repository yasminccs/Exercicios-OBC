alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
let name = prompt("Informe seu nome.")
let age = prompt("Informe sua idade.")
let conf = confirm("Confirme sua idade: " + age + " anos")
if(conf){
    conf = 'Sim'
} else {
    conf = 'Não'
} //não é sobre condicioais mas adicionei por conta própria rsrss
alert("Nome: "+ name +"\nIdade: "+age+" anos" + "\nIdade confirmada: "+conf)
