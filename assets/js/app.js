'use strict'

let botaoAdicionarLinha = document.getElementById('adicionar-linha')
let id = 5

botaoAdicionarLinha.addEventListener('click', () => {

    let tabela = document.getElementById('t3')    
    let linha = document.createElement('tr')
    let td1 = criarColuna(id, 'span')
    id++    
    let td2 = criarColuna('', 'input')
    let td3 = criarColuna('', 'input')
    linha.replaceChildren(td1, td2, td3)
    tabela.appendChild(linha)

})

const criarColuna = (conteudoUsuario, tipoUsuario) => {

    let conteudo = conteudoUsuario
    let tipo = tipoUsuario

    const td = document.createElement('td')

    if(tipo == 'span'){
        let span = document.createElement('span')
        span.textContent = conteudo
        td.appendChild(span)
    } else if (tipo == 'input') {
        let input = document.createElement('input')
        input.type = 'text'
        td.appendChild(input)
    }
    
    return td 

}