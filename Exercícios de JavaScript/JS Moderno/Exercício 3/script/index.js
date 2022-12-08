const input = document.querySelector('#input')
const btnDelete = document.getElementById('delete')

const allowedNum = [...document.querySelectorAll('.nums')].map(ev => ev.textContent)
const allowedSimbols = [...document.querySelectorAll('.symbol')].map(ev => ev.textContent)

import { setNum, setSymbols } from "./setCaracters.js"
setNum()
setSymbols()

btnDelete.addEventListener('click', function (){
  input.value = input.value.slice(0, -1)
})

import { mediaQuery } from "./mediaQuery.js"
mediaQuery()

input.addEventListener('keydown', ev => {
  ev.preventDefault()
  if(allowedNum.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(allowedSimbols.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
})

input.addEventListener('keyup', () => {
  if (input.value.length > 20) {
      input.value = input.value.slice(0, 20);
      alert('Quantidade máxima de caracteres atingido.')
  }
})

document.querySelector('#equal').addEventListener('click', calculate)

function calculate(){
  const result = eval(input.value)
  input.value = result
}

import { copy } from "./copy.js"
copy()

import { theme } from "./theme.js"
theme()