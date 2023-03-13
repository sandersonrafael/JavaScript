const fs = require('fs').promises

// readfile para ler algum arquivo
module.exports = (caminho) => fs.readFile(caminho, 'utf8' )