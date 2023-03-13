// inicia o projeto com npm init -y para gerar o json
// agora para instalar o express: npm install express
// se desejar fixar a versão, usa-se npm install express -E
// npm update -> atualiza todos os pacotes do package.json para a versão mais atual

// para criar uma dependência de desenvolvimento, usa-se: npm install nomeDaDependencia --save-dev
// para criar ou alterar uma dependência para produção, usa-se: npm install nomeDaDependencia --save-prod
// para instalar uma versão específica de uma dependência, usa-se: npm install nomeDaDependencia@numeroDaVersao
// ex: npm install express@2.1.0
// na versão, o ^ significa que muda o 2º e 3º número da versão, como ^1.2.3 poderia atualizar para 1.3.1 ou para 1.2.4, mas não para 2.1.2
// o ~ sinifica que vai atualizar somente o patch, como 1.1.2 -> 1.1.3

// nas versões, os termos são descritos como: major.minor.patch -> ex: 1.2.1
// se eu instalar a versão como @4.x, ele vai criar a lib com a major 4 e o minor e o patch mais atuais, criando o ^versao no json

// para desinstalar, basta executar o comando npm uninstall nomeDaDependencia
// ex: npm uninstall express

// npm ls -> lista todas as dependências e pacotes
// posso limitar também o tanto de diretórios e diretórios dentro de diretórios, com:
// npm ls --depth=1 vai listar as pastas no caminho e as pastas dentro delas, se for =0, vai listar somente as primeiras pastas no caminho

// npm outdated irá mostrar as dependências desatualizadas, com sua versão atual, a requerida e a última