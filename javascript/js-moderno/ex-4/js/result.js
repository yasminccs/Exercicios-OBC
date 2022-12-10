const input = document.querySelector('#input')
export function calculate(){
  document.querySelector('#equal').addEventListener('click', function () {
    const result = eval(input.value)
    input.value = result
  })
}