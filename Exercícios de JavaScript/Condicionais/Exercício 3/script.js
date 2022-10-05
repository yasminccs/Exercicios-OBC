const lightYears = Number(prompt('Informe a distância em anos-luz.'))
      const menu = prompt('Escolha uma das opções abaixo.\n\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)')
      let choosen = ''
      let conversion;
      switch(menu){
        case '1':
            choosen = 'Parsec'
            conversion = lightYears * 0.306601 + ' pc'
            break
        case '2':
            choosen = 'Unidade Astronômica'
            conversion = lightYears * 63241.1 + ' au'
            break
        case '3':
            choosen = 'Quilômetros'
            conversion = lightYears * 9.5 * Math.pow(10, 12) + ' km'
            break
        default:
            choosen = 'Unidade não identificada.'
            conversion = 'Fora do escopo'
            break
      }

      alert(`Distância: ${lightYears} anos-luz\nConversão escolhida: ${choosen}\nDistância convertida: ${conversion}`)
