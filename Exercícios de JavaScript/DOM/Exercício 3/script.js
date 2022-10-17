function scale(){
    const positionPlayer = document.querySelector('#positionPlayer').value
    const namePlayer = document.querySelector('#namePlayer').value
    const nmr = document.querySelector('#shirtPlayer')
    const shirtPlayer = Number(nmr.value)

    const form = document.querySelector('#sendPlayers')
    const result = document.querySelector('#res')

    if(positionPlayer === 0 || namePlayer === 0 || shirtPlayer === 0){
        alert('Preencha os campos corretamente antes de escalar um jogador.')
    } else {
        const save = confirm(`Deseja confirmar a escalação do jogador "${namePlayer}"? (Clique em "OK" para confirmar)\n\nNome do jogador: ${namePlayer}\nPosição do jogador: ${positionPlayer}\nNúmero da camisa do jogador: ${shirtPlayer}`)
        if(save){
            alert('Salvo com sucesso.')
            
            const div = document.createElement('div')
            div.id = 'players'
            const ul = document.createElement('ul')
        
            ul.innerHTML += `<li><strong>Posição do jogador: </strong>${positionPlayer}</li>`
            ul.innerHTML += `<li><strong>Nome do jogador: </strong>${namePlayer}</li>`
            ul.innerHTML += `<li><strong>Número da camisa: </strong>${shirtPlayer}</li>`

            const btn = document.createElement('button')
            btn.innerText = `Remover`
            btn.setAttribute('onclick', 'remov(this)')

            result.append(div)
            div.append(ul, btn)
        } else {
            alert('Não salvo.')
        }
    }
    form.reset()
}

function remov(element){
    const save = confirm(`Deseja excluir jogador? (Clique em "OK" para confirmar)`)
    if(save){
        const div = document.querySelector('#players')
        element.parentNode.remove(div)
        alert('Jogador excluído com sucesso.')
    } else {
        alert('Jogador não excluído.')
    }
}