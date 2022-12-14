function createLabel (text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (value, name, id, type='text'){
    const input = document.createElement('input')
    input.value = value
    input.name = name
    input.id = id
    input.type = type
    return input
}

const form = document.querySelector('#form')
const result = document.querySelector('#addLinguage')
const btnAddTech = document.querySelector('#addTech')
btnAddTech.addEventListener('click', addTech)
let developers = []
let rows = 0

function addTech(){
    const p = document.createElement('p')
    p.id = 'group-' + rows
    p.className = 'gp'

    const labelTechName = createLabel('Tecnologia: ', 'tecnologies-' + rows)
    const inputTechName = createInput(null, 'techName', 'techName-' + rows)

    const labelExpTime = createLabel(' | Tempo de experiência: ', 'expTime-' + rows)

    const id1 = 'yearsExp-' + rows + '.1'
    const inputExpTime1 = createInput('0-2 anos', 'gpRadio-' + rows, id1, 'radio')
    const labelExpTime1 = createLabel(' 0-2 anos', id1)

    const id2 = 'yearsExp-' + rows + '.2'
    const inputExpTime2 = createInput('3-4 anos', 'gpRadio-' + rows, id2, 'radio')
    const labelExpTime2 = createLabel(' 3-4 anos', id2)

    const id3 = 'yearsExp-' + rows +'.3'
    const inputExpTime3 = createInput('5+ anos', 'gpRadio-' + rows, id3, 'radio')
    const labelExpTime3 = createLabel(' 5+ anos', id3)

    const btnRemove = document.createElement('button')
    btnRemove.type = 'button'
    btnRemove.innerText = 'Remover'
    btnRemove.style.marginLeft = '10px'
    btnRemove.setAttribute('onlcick', 'remov(this)')
    btnRemove.addEventListener('click', function (){
        result.removeChild(p)
    })

    result.appendChild(p)
    p.append(labelTechName, inputTechName, labelExpTime, inputExpTime1, labelExpTime1, inputExpTime2, labelExpTime2, inputExpTime3, labelExpTime3, btnRemove)
    
    rows++
}

form.addEventListener('submit', send)

function send(ev){
    ev.preventDefault()

    const fullName = document.querySelector('#name')
    const pResult = document.querySelectorAll('.gp')

    let technologies = []
    pResult.forEach(row => {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp})

    })

    const newDev = {fullName: fullName.value, technologies: technologies}
    developers.push(newDev)

    alert('Dev cadastrado(a) com sucesso!')
    form.reset()
    result.innerText = " "
}