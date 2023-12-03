'use strict'

let botaoAdicionarLinha = document.getElementsByClassName('adicionar-linha')
let botaoRemoverLinha = document.getElementsByClassName('remover-linha')
let botaoAdicionarColuna = document.getElementsByClassName('adicionar-coluna')
let botaoRemoverColuna = document.getElementsByClassName('remover-coluna')
let botaoReset = document.getElementById('reset')


for(let botao of botaoAdicionarLinha){

    botao.addEventListener('click', () => {

        let qntColunas = botao.parentNode.parentNode.parentNode.children[1].children.length
        let qntLinhas = botao.parentNode.parentNode.parentNode.children.length
        let idFinal = botao.parentNode.parentNode.parentNode.children[qntLinhas - 5].children[0].textContent
        let id = Number(idFinal)

        let tabela = document.getElementById(`t${botao.classList[1]}`)
        let linha = document.createElement('tr')
        let td1 = criarColuna(id + 1, 'span')
        linha.appendChild(td1)

        for(let i = 1; i < qntColunas; i++){
            let td = criarColuna('', 'input') 
            linha.appendChild(td)
        }

        tabela.children.item(id + 2 ).insertAdjacentElement('beforeBegin',linha)

    })

}

for(let botao of botaoRemoverLinha){

    botao.addEventListener('click', removerLinha => {

        let qntLinhas = botao.parentNode.parentNode.parentNode.children.length
        let idFinal = botao.parentNode.parentNode.parentNode.children[qntLinhas - 5].children[0].textContent
        let id = Number(idFinal)

        if(id != 4){
            let tabela = document.getElementById(`t${botao.classList[1]}`)    
            let linhaFinal = tabela.children[id + 1]
            tabela.removeChild(linhaFinal)
        }

    })

}

for(let botao of botaoAdicionarColuna){

    botao.addEventListener('click', () => {

        for(let linha of botao.parentNode.parentNode.parentNode.children){
                
            let qntColunas = botao.parentNode.parentNode.parentNode.children[1].children.length
        
            if(linha.children[0].colSpan == 1 && !linha.classList[0]){
                
                let coluna = criarColuna('', 'input')
                linha.appendChild(coluna)

            }else{

                linha.children[0].colSpan = Number(qntColunas) + 1
            
            }

        }

    })

}

for(let botao of botaoRemoverColuna){

    botao.addEventListener('click', () => {

        let qntColunas = botao.parentNode.parentNode.parentNode.children[1].children.length
        
        for(let linha of botao.parentNode.parentNode.parentNode.children){    
        
            if(qntColunas != 3 && linha.children[0].colSpan == 1 && !linha.classList[0]){
                let colunaFinal = linha.children[linha.children.length - 1]  
                linha.removeChild(colunaFinal)
            }

        }

    })

}

botaoReset.addEventListener('click', () => {

    let tabelas = document.getElementsByClassName('tabela')
    
    for(let tabela of tabelas){
        
        let qntLinhas = tabela.children.length
        let idFinal = tabela.children[qntLinhas - 5].children[0].textContent
        let id = Number(idFinal)

        if(id != 4){

            for(let i = id; i > 4; i--){

                let linhaFinal = tabela.children[i + 1]
                tabela.removeChild(linhaFinal)

            }

        } 

        let qntColunas = tabela.children[1].children.length
        
        for(let linha of tabela.children){    
            
            if(qntColunas != 3 && linha.children[0].colSpan == 1 && !linha.classList[0]){
                
                for(let i = qntColunas; i > 3; i--){

                    let colunaFinal = linha.children[i - 1]  
                    linha.removeChild(colunaFinal)

                }

            }

        }

    }

})

const criarColuna = (conteudoParametro, tipoParametro) => {

    let conteudo = conteudoParametro
    let tipo = tipoParametro

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

