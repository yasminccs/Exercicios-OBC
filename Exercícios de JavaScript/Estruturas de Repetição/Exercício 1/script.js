const name = prompt("Informe o nome da nave.");
let menu = prompt("Deseja entrar na dobra espacial?\n1 - Sim\n2 - Não");
let i = 0;
while (menu !== "2") {
  i += 1;
  menu = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não");
}
alert(`Nome da nave: ${name}\nNúmero de dobras feitas: ${i}`);
