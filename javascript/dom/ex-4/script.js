const form = document.querySelector('#form')
form.addEventListener('submit', send)

function send(ev){
    ev.preventDefault()
    const name = document.querySelector('#name').value
    const address = document.querySelector('#address').value
    const obs = document.querySelector('#txt').value

    const typeBread = document.querySelector('select[name="typeBread"]').value
    const protein = document.querySelector('input[name="protein"]:checked').value
    let saladAll = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        saladAll += '-' + item.value
    })


    const save = confirm(`Deseja confirmar seu pedido? (Clique em "OK" para confirmar)\n\nNome: ${name}\nEndereço: ${address}\nTipo de pão: ${typeBread}\nProteína: ${protein}\nSalada: ${saladAll}\nObservações: ${obs}`)
    if(save){
        alert('Pedido enviado com sucesso. Levará cerca de 30min para chegar na sua casa! :)')
        form.reset()
    } else {
        alert('Pedido cancelado.')
    }
}