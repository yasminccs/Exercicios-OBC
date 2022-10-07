const vaga = []
let obj;

function listVagasDisp(){
    if(vaga.length > 0){
        vaga.forEach((element, indc) => {
            alert(`Vaga ${indc+1}\nNome da vaga: ${element.name}\nCandidatos: ${element.candidato.length} inscrito(s)`)
        })
    } else {
        alert('Não há vagas disponíveis. Vá em "Criar uma nova vaga".')
    }
}

function newVaga(){
    obj = {}
    obj.name = prompt('Informe o nome da vaga.')
    obj.describe = prompt('Digite uma descrição para a vaga.')
    obj.limitDate = prompt('Informe a data limite para fazer a inscrição (No formato dd/mm/aaaa).')
    obj.candidato = []
    const save = confirm(`Deseja salvar vaga? (Clique em "OK" para confirmar)\n\nVaga: ${obj.name}\nDescrição: ${obj.describe}\nData limite para fazer a inscrição: ${obj.limitDate}`)
    if(save){
        vaga.push(obj)
        alert('Vaga adicionada com sucesso.')
    } else {
        alert('Vaga não adicionada. Retornando ao menu.')
    }
}

function viewVaga(){
    if(vaga.length > 0){
        const indc = Number(prompt('Informe por favor a posição da vaga.'))
        if(indc > vaga.length || indc < 0){
            alert('Essa posição não existe.')
        } else {
            alert(`Vaga ${indc}\n\nNome da vaga: ${vaga[indc-1].name}\nDescrição: ${vaga[indc-1].describe}\nData limite para fazer a inscrição: ${vaga[indc-1].limitDate}\nQuantidade de candidatos: ${vaga[indc-1].candidato.length} inscrito(s)\nNome dos candidatos: ${vaga[indc-1].candidato.join(' | ')}`)
        }
    } else {
        alert('Não há vagas disponíveis. Vá em "Criar uma nova vaga".')
    }
}

function subscribe(){
    if(vaga.length > 0){
        const newCandidato = prompt('Informe o nome do(a) candidato(a).')
        const indc = Number(prompt('Qual a posição da vaga?'))
        const save = confirm(`Deseja salvar inscrição do(a) candidato(a) na vaga "${vaga[indc-1].name}"? (Clique em "OK" para confirmar)\n\nNome do(a) candidato(a): ${newCandidato}`)
        if(save){
            vaga[indc-1].candidato.push(newCandidato)
            alert('Inscrição salva com sucesso!')
        } else {
            alert('Inscrição deletada. Retornando ao menu.')
        }
    } else {
        alert('Não há vagas disponíveis para inscrever um candidato.')
    }
}

function removVaga(){
    if(vaga.length > 0){
        const indc = Number(prompt('Qual a posição da vaga que você deseja excluir?'))-1
        const save = confirm(`Deseja excluir a vaga "${vaga[indc].name}"? (Clique em "OK" para confirmar)\n\nVaga ${indc+1}\nDescrição: ${vaga[indc].describe}\nData limite para fazer a inscrição: ${vaga[indc].limitDate}\nQuantidade de candidatos: ${vaga[indc].candidato.length} inscrito(s)\nNome dos candidatos: ${vaga[indc].candidato.join(' | ')}`)
        if(save){
            vaga.splice(indc, 1)
            alert('Vaga deletada com sucesso!')
        } else {
            alert('Vaga não deletada. Retornando ao menu.')
        }
    } else {
        alert('Não há vagas disponíveis para excluir.')
    }
}

function menu(){
    return prompt('Bem-vindo(a) ao Sistema de Vagas de Emprego.\n\nEscolha uma das opções abaixo:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever uma candidato em uma vaga\n5 - Excluir vaga\n6 - Sair')
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