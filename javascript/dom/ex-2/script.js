function sendImmobile(){
    const typeIm = document.querySelector('input[name="immobile"]:checked').value
    const areaIm = document.querySelector('#area').value
    const rent = document.querySelector('input[name="rented"]:checked').value

    const result = document.querySelector('#res')
    const clone = result.cloneNode()
    clone.setAttribute('class', 'imovel')

    if(rent === 'Sim'){
        clone.innerHTML = `<strong>Imóvel</strong> <span style="color: white; background-color: red; padding: 3px;">ALUGADO</span><br><br>Tipo do imóvel: ${typeIm}<br>Área do imóvel: ${areaIm} m²<br><br>`
    } else {
        clone.innerHTML = `<strong>Imóvel</strong> <span style="color: white; background-color: green; padding: 3px;">LIVRE</span><br><br>Tipo do imóvel: ${typeIm}<br>Área do imóvel: ${areaIm} m²<br><br>`
    }

    result.appendChild(clone)

    const btnRemove = document.createElement('button')
    btnRemove.setAttribute('onclick', 'immobileRemove(this)')
    btnRemove.innerText = 'Remover'
    clone.appendChild(btnRemove)
    document.querySelector('#cadastroImoveis').reset()
}

function immobileRemove(element){
    let cloneP = document.querySelector('.imovel')
    element.parentNode.remove(cloneP)
}