const form = document.querySelector('#form')
form.addEventListener('submit', send)

function send(ev){
    ev.preventDefault()
    const result = document.querySelector('#addLinguage')

    const name = document.querySelector('#name').value
    const p = document.createElement('p')

    const label = document.createElement('label')
    label.innerText = 'Tecnologia: '

    let inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.id = 'nameText'
    inputText.setAttribute('onchange', 'inputTech()')
    
    const br = document.createElement('br')
    const br2 = document.createElement('br')

    const labelRadio = document.createElement('label')
    labelRadio.innerHTML = ' | Tempo de experiência: '

    let inputRadio1 = document.createElement('input')
    inputRadio1.type = 'radio'
    inputRadio1.id = '0-2years'
    inputRadio1.name = 'experience'
    inputRadio1.value = '0-2 anos'
    const labelR1 = document.createElement('label')
    labelR1.innerText = ' 0-2 anos'
    
    let inputRadio2 = document.createElement('input')
    inputRadio2.type = 'radio'
    inputRadio2.id = '3-4years'
    inputRadio2.name = 'experience'
    inputRadio2.value = '3-4 anos'
    const labelR2 = document.createElement('label')
    labelR2.innerText = ' 3-4 anos'
    
    let inputRadio3 = document.createElement('input')
    inputRadio3.type = 'radio'
    inputRadio3.id = '5plusYears'
    inputRadio3.name = 'experience'
    inputRadio3.value = '5+ anos'
    const labelR3 = document.createElement('label')
    labelR3.innerText = ' 5+ anos'
    
    const btn = document.createElement('button')
    btn.innerText = 'Remover'
    btn.setAttribute('onclick', 'remov(this)')

    result.appendChild(p)
    p.append(label, inputText, labelRadio, inputRadio1, labelR1, inputRadio2, labelR2, inputRadio3, labelR3, br, br2, btn)

    let radioElements = []
    document.querySelectorAll('input[class="experience"]:checked').forEach(element => {
        radioElements.push(element.value)
    })
    console.log(radioElements)
}

function inputTech(){
    let arrLinguage = []
    document.querySelectorAll('#nameText').forEach(element => { 
        arrLinguage.push(element.value)
    })
    console.log(arrLinguage)
}

function remov(element){
    const p = document.createElement('p')
    element.parentNode.remove(p)
}

const btnSave = document.querySelector('#save')
btnSave.addEventListener('click', save)

function save(){

}