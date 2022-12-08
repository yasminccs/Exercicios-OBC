const input = document.querySelector('#input')
let media = window.matchMedia("(max-width: 768px)")

export function mediaQuery() {
  document.querySelector('#clear').addEventListener('click', function () {
    if(media.matches){
      input.value = " "
    } else {
      input.value = " "
      input.focus()
    }
  })
}