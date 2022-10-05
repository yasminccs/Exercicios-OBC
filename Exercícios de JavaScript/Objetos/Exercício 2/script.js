const name = prompt('Informe o modelo do veículo.')
      const type = prompt('Informe o tipo do veículo.')
      const velocityMax = Number(prompt('Informe a velocidade máxima do veículo.'))
      let menu = ""
      let inital = 0 
      let acceleration;
      let total;

      const dados = {
        name,
        type,
        velocityMax
      }
      do {
        menu = prompt('Escolha uma das opções abaixo.\n1 - Acelerar\n2 - Parar')
        switch(menu){
            case '1':
                acceleration = Number(prompt('Quantos km você quer acelerar?'))
                total = inital += acceleration
                alert(`Velocidade atual do veículo: ${total}km`)
                if(total > velocityMax){
                    alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!\n\nVelocidade atual: ${total}km\nVelocidade máxima: ${dados.velocityMax}km`)
                }
                break
            case '2':
                alert(`Nome da nave: ${dados.name}\nTipo da nave: ${dados.type}\nVelocidade atual da nave: ${total}km`)
                break
            default:
                alert('Opção inválida.')
                break
        }

      } while (menu !== '2')
