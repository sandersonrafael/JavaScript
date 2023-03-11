// npm init -y é usado para inicializar um novo projeto Node.js dando sim para todas configurações
// para instalar babel como dev, usar: npm install --save-dev @babel/cli @babel/preset-env @babel/core
// se quiser controlar a versão, botar @versao na frente, como: @babel/cli@7.6.4
// para ignorar a pasta no github, basta criar arquivo .gitignore e digitar a pasta/arquivo a ignorar, como node_modules

// para converter o código com o babel para navegadores mais antigos:
// npx babel script.js -o bundle.js --presets=@babel/env
// ^isso só vai fazer essa transpilação uma vez, de modo manual. Existe maneira de deixar isso automático

// após a conversão, o script src="" vai referenciar o bundle e não o script para ter o código transpilado

// em package.json, ir onde tem script e teste e adicionar:
// "babel": "babel ./script.js -o ./bundle.js --presets=@babel/env -w"
// -w para fazer automático sempre que o arquivo principal sofrer alterações
// executar comando: npm run babel; o bundle vai atualizar constantemente com o script.js