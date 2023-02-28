// Significa dizer que a função sabe onde ela foi declarada. Ela vai buscar primeiro as variáveis dentro do próprio escopo e caso não encontre, busca no seu "prototype" ou parent
// De dentro da função, é possível acessar as variáveis que estão fora da função. Ela vai buscando níveis acima até encontrar a variável e seu valor


const nome = 'Luiz'

function falaNome() { // aqui ela chama do escopo global, pois não foi declarada dentro dessa função maior
    console.log(nome)
    
    function podeFalar() { // essa função chama o próprio "nome", pois já foi declarado dentro dela mesma
        let nome = 'Otávio'
        console.log(nome)
    }
    podeFalar()

}
falaNome()
