let vaga = []
let obj;

function listVagasDisp(){
    vaga.forEach((element, indc) => {
        alert(`Vaga ${indc+1}\n\nNome: ${element.name}\nCandidatos inscritos: ${element.candidato.length}`)
    })
}

function newVaga(){
    obj = {}
    obj.name = prompt('Informe o nome da vaga.')
    obj.describe = prompt('Digite uma descrição para a vaga.')
    obj.limitDate = prompt('Informe a data limite para a inscrição.')
    obj.candidato = []
    let save = confirm(`Deseja salvar vaga? (Clique em "OK" para confirmar)\n\nNome: ${obj.name}\nDescrição: ${obj.describe}\nData limite: ${obj.limitDate}`)
    if(save){
        vaga.push(obj)
        alert('Vaga adicionada com sucesso.')
    } else {
        alert('Vaga não adicionada. Retornando ao menu.')
    }
    console.log(vaga)
}

function viewVaga(){
    let indc = Number(prompt('Informe por favor o índice da vaga.'))
    alert(`Vaga ${indc}\n\nNome: ${vaga[indc-1].name}\nDescrição: ${vaga[indc-1].describe}\nData limite: ${vaga[indc-1].limitDate}\nQuantidade de candidatos: ${vaga[indc-1].candidato.length} inscritos\nNome dos candidatos: ${vaga[indc-1].candidato.join(' / ')}`)
}

function subscribe(){
    let newCandidato = prompt('Informe o nome do candidato.')
    let indc = Number(prompt('Qual o índice da vaga?'))
    let save = confirm(`Deseja salvar inscrição do candidato na vaga "${vaga[indc-1].name}"?\n\nNome do candidato: ${newCandidato}`)
    if(save){
        vaga[indc-1].candidato.push(newCandidato)
        alert('Inscrição salva com sucesso!')
    } else {
        alert('Inscrição deletada. Retornando ao menu.')
    }
}

function removVaga(){
    let indc = Number(prompt('Qual o índice da vaga que você deseja excluir?'))
    let save = prompt(`Deseja excluir a vaga "${vaga[indc-1].name}" (Clique em "OK" para confirmar)?\n\nVaga ${indc}\nDescrição: ${vaga[indc-1].describe}\nData limite: ${vaga[indc-1].limitDate}\nQuantidade de candidatos: ${vaga[indc-1].candidato.length} inscritos\nNome dos candidatos: ${vaga[indc-1].candidato.join(' / ')}`)
    if(save){
        
        alert('Vaga deletada com sucesso!')
    } else {
        alert('A vaga não foi deletada. Retornando ao menu.')
    }
}

function menu(){
    return prompt('Bem-vindo(a) ao Sistema de Vagas.\n\nEscolha uma das opções abaixo:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever uma candidato em uma vaga\n5 - Excluir vaga\n6 - Sair')
}

function run(){
    let options = ''
    do {
        options = menu()
        switch(options){
            case '1':
                listVagasDisp()
                break
            case '2':
                newVaga()
                break
            case '3':
                viewVaga()
                break
            case '4':
                subscribe()
                break
            case '5':
                removVaga()
                break
            case '6':
                alert('Programa encerrado.')
                break
            default:
                alert('Opção inválida.')
                break
        }
    }
    while(options !== '6')
}

run()