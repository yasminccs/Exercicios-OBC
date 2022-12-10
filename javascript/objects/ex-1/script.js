let immobile = []
let menu = ''
do {
  menu = prompt(`Bem-vindo a Imobiliária Swear!\nNúmero de imóveis salvos: ${immobile.length}\n\nEscolha uma das opções abaixo:\n1 - Salvar um imóvel\n2 - Ver imóveis salvos\n3 - Sair`)

  switch(menu){
    case '1':
      let imv = {}
      imv.prop = prompt('Informe o nome do(a) proprietário(a).')
      imv.room = prompt('Informe a quantidade de quartos.')
      imv.restr = prompt('Informe a quantidade de banheiros.')
      imv.garag = prompt('Terá garagem? (Clique em "Ok" para confirmar.)')

      const confirmation = confirm(`Deseja salvar o imóvel?\n\nProprietário(a): ${imv.prop}\nQuartos: ${imv.room}\nBanheiros: ${imv.restr}\nPossui garagem: ${imv.garag}`)
      if(confirmation){
        immobile.push(imv)
        alert('Imóvel salvo com sucesso!')
      } else {
        alert('Voltando ao menu inicial.')
      }
      break
    case '2':
      for (let i = 0; i < immobile.length; i++){
        alert(`Imóvel ${(i+1)}\nProprietário(a): ${immobile[i].prop}\nQuartos: ${immobile[i].room}\nBanheiros: ${immobile[i].restr}\nPossui garagem: ${immobile[i].garag}`)
      }
      break
    case '3':
      alert('Programa encerrado.')
      break
    default:
      alert('Opção inválida.')
      break
  }
} while (menu !== '3')