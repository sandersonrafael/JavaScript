/* fetch('pessoas.json') // busca os dados do json que são similares a objetos, mas com notação { "chave": "valor", "chaveDeNumero": 30 }
    .then(resposta => resposta.json()) // .json() -> converte o json em objeto para poder ser manipulado pelo javascript
    .then(json => carregaElementos(json)) // pega o valor já convertido e manda para uma função criada posteriormente
 */

    //substituindo por axios: necessário adicionar o script do axios no html

axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))

function carregaElementos(json) {
    const table = document.createElement('table') // cria uma tabela mas não mexe nela
    
    for (let pessoa of json) { // percorre todos objetos do json
        const tr = document.createElement('tr') // cria uma linha

        let td = document.createElement('td') // cria a 1ª coluna
        td.innerHTML = pessoa.nome // HTML da primeira coluna é o nome do "índice"
        tr.appendChild(td) // adiciona a coluna à linha criada

        td = document.createElement('td') // cria a 2ª coluna
        td.innerHTML = pessoa.idade // HTML da segunda coluna é a idade do "índice"
        tr.appendChild(td) // adiciona a coluna à linha criada 

        td = document.createElement('td') // ...
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
        console.log(pessoa.nome)
    }

    const resultado = document.querySelector('.resultado') // seleciona a div no index.html
    resultado.appendChild(table) // adiciona a tabela criada abaixo da div selecionada
}