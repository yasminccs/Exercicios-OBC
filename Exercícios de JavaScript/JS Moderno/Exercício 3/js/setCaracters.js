const numbers = document.getElementsByClassName('nums')
const symbols = document.getElementsByClassName('symbol')
let lastClicked = 'symbol'

export function setNum () {
    Array.from(numbers).forEach(function(numberElement) {
      const numberValue = numberElement.textContent
      numberElement.addEventListener('click', function() {
        lastClicked = 'number'
        input.value += numberValue
        if (input.value.length > 20) {
          input.value = input.value.slice(0, 20);
          alert('Quantidade máxima de caracteres atingido.')
      }
      });
    });
  }
  
export function setSymbols() {
    Array.from(symbols).forEach(function(numberElement) {
      const symbolValue = numberElement.textContent
      numberElement.addEventListener('click', function() {
        if (lastClicked !== 'symbol') {
          lastClicked = 'symbol'
          input.value += symbolValue
        }
      })
    })
  }