// iniciar com o comando: npm init -y (-y para dar sim para todas perguntas)

// instalar babel e webpack ->
// npm i --save-dev @babel/preset-env @babel/cli @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2


// criar pasta src
// criar o index.js dentro da pasta src
// pasta public com tudo que o usuário vê
// criar pasta assets com pastas css, img, e js, botando o bundle.js dentro do js


// necessário criar o arquivo webpack.config.js
// dentro do arquivo, importar o 'path' do webpack

// const path = require('path') -> CommonJS

/* module.exports = {       -> exporta objetos para fora da config
    mode: 'development',        -> faz com que tudo seja feito mais rápido e leve, em uma mesma linha e etc
    entry: './src/index.js',        -> entrada é o arquivo index.js que está na pasta src
        output: {                       -> onde o arquivo transpilado estará e seu nome
            path: path.resolve(__dirname, 'public', 'assets', 'js'),
            filename: 'bundle.js'
        },
    module: {
        rules: [{               -> array com objetos dentro para cada regra dos modules
            exclude: /node_modules/,    -> usa-se expressão regular: o webpack não irá analisar a posta node_modules
            test: /\.js$/,                  -> testa a extensão do arquivo e forma o bundle com os arquivos com essa extensão. Necessário usar exp regulares e contra barra para definir que precisa ter o ponto
            use: {                              -> define o que o webpack irá usar
                loader: 'babel-loader',             -> o loarder do babel que está no package.json 
                options: {                              -> opções utilizadas
                    presets: ['@babel/env']                 -> presets utilizados
                }
            }
        }]
    },
    devtool: 'source-map'       -> mapeia os erros nos arquivos originais e não no bundle, criando um arquivo bundle.js.map (acho)
} */                         // -> também indicando onde é executado cada comando no console

// substitui o script "test" do package.json por um de nome qualquer e com value "webpack -w" -> -w para watch, ou assistir, acompanhar, etc...
// ex: "gera": "webpack -w"

// após isto, executar o comando: npm run "nome do comando que foi criado"
// no caso acima, foi criado o comando "gera", então: npm run gera

// para executar o projeto de maneira definitiva, é necessário alterar o webpack.config.js ->
// no module.exports, trocar o value de mode de 'development' para 'production'
// o bundle vai ser feito tudo compactado, em apenas uma linha