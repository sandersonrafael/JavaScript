// npm init -y é usado para inicializar um novo projeto Node.js dando sim para todas configurações
// para instalar babel como dev, usar: npm install -- save-dev @babel/cli @babel/preset-env @babel/core
// se quiser controlar a versão, botar @versao na frente, como: @babel/cli@7.6.4
// para ignorar a pasta no github, basta criar arquivo .gitignore e digitar a pasta/arquivo a ignorar, como node_modules

// para converter o código com o babel para navegadores mais antigos:
// npx babel main.js -o bundle.js --presets=@babel/env