const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('#input')
const numbers = document.getElementsByClassName('nums')
const symbols = document.getElementsByClassName('symbol')
let lastClicked = 'symbol'

const allowedNum = [...document.querySelectorAll('.nums')].map(ev => ev.textContent)
const allowedSimbols = [...document.querySelectorAll('.symbol')].map(ev => ev.textContent)

Array.from(numbers).forEach(function(numberElement) {
  const numberValue = numberElement.textContent
  numberElement.addEventListener('click', function() {
    lastClicked = 'number'
    input.value += numberValue
  });
});

Array.from(symbols).forEach(function(numberElement) {
  const symbolValue = numberElement.textContent
  numberElement.addEventListener('click', function() {
    if (lastClicked !== 'symbol') {
      lastClicked = 'symbol'
      input.value += symbolValue
    }
  })
})

document.querySelector('#clear').addEventListener('click', function () {
  input.value = " "
  input.focus()
})

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

document.querySelector('#equal').addEventListener('click', calculate)

function calculate(){
  const result = eval(input.value)
  input.value = result
}

document.querySelector('#copyToClipboard').addEventListener('click', ev => {
  const btnCopy = ev.target
  if(btnCopy.innerText === 'Copy'){
    btnCopy.innerText = 'Copied!'
    btnCopy.classList.add('success')
    navigator.clipboard.writeText(input.value)
   } else {
    btnCopy.innerText = 'Copy'
    btnCopy.classList.remove('success')
   }
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark"){
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = "dark"
  }
})