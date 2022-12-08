export function copy() {
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
}