const name = prompt('Informe o nome da nave.')
      let invertedName = ''
      for (let i = name.length - 1; i >= 0; i--){
        if(name[i] === 'e'){
            break
        } else {
            invertedName += name[i]            
        }
      }
      alert(`Nome da nave: ${name}\nNome invertido: ${invertedName}`) 