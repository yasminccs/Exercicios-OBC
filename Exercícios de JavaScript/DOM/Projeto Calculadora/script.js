const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('#input')
const inputResult = document.querySelector('#result')

const allowedNum = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
const allowedSimbols = [' ', '(', ')', '/', '*', '-', '+', '.', '%']

document.querySelectorAll('.charKey').forEach(element => {
  element.addEventListener('click', function () {
    const value = element.dataset.value
    input.value += value
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
  // input.innerText = 'ERROR'
  // input.classList.add('error')
  // input.classList.remove('error')
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