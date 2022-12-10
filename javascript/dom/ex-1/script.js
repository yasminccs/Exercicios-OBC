function addHouse(){
    const nmr = document.querySelector('#numberHouse').value
    const bairro = document.querySelector('#bairro').value
    const city = document.querySelector('#cityHouse').value
    const estate = document.querySelector('#estateHouse').value

    const result = document.querySelector('.res')
    const cloneP = result.cloneNode()
    cloneP.setAttribute('class', 'house')
    const position = result.children.length + 1
    cloneP.innerHTML = `<strong>Residência ${position}:</strong><br>Número: ${nmr}<br>Bairro: ${bairro}<br>Cidade: ${city}<br>Estado: ${estate}<br><br>` 
    result.appendChild(cloneP)

    const btnRemove = document.createElement('button')
    btnRemove.setAttribute('onclick', 'removerCasas(this)')
    btnRemove.innerText = 'Remover'
    cloneP.appendChild(btnRemove)
}

function removerCasas(element){
    const housein = document.querySelector('.house')
    element.parentElement.remove(housein)
}
