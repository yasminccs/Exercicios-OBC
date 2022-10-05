const name = prompt('Informe o nome da espaço nave.')
      const x = prompt(`Qual caracter de ${name} você deseja realizar a substituição?`)
      const y = prompt(`Qual caracter você deseja colocar no lugar de ${x}?`)
      let choosen = ''
      for (let i = 0; i < name.length; i++){
         if(name[i] === x){
            choosen += y
         } else {
            choosen += name[i]
         }
      }
      alert(`Nome da nave: ${name}\nNome atual: ${choosen}`)