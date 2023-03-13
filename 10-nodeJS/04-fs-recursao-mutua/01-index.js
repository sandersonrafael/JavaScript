// o fs é uma ferramenta muito importante no javascript para manipular arquivos,
// podendo acessar, editar, deletar, listar, analisar e etc

// funções que dependem de outra função. Utiliza-se o termo recursão mútua
const fs = require('fs').promises
const path = require('path')

// fs.readdir(path.resolve(__dirname)) -> lê o diretório
//     .then(files => console.log(files))
//     .catch(err => console.log(err))

// fs.stat -> verifica dados/informações do arquivo/diretório
// fs.stat(caminho).isDIrectory -> retorna true ou false para se o arquivo é diretório

// comando pwd no terminal indica o caminho absoluto, como:
// /home/ubuntu/Desktop/Cursos/curso-javascript-e-typescript/10-nodeJS

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir) // vai ler todos arquivos do diretório atual
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)
        
        if (/\.git/g.test(fileFullPath)) continue // toda pasta que tiver .git não será exibida
        if (/node_modules/g.test(fileFullPath)) continue // toda node modules tá fora

        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue // volta para o for na próxima iteração antes de logar
        }
        if (
            !/\.css/g.test(fileFullPath) && !/\.html/g.test(fileFullPath)
        ) continue // se o arquivo (não) não tiver css (se tiver, então) e (não)não tiver .html, lista
        
        console.log(fileFullPath, stats.isDirectory()) // verifica se o arquivo é um diretório
    }
}
readdir('/home/ubuntu/Desktop/Cursos/curso-javascript-e-typescript/') // LInux
// ^ vai mostrar todos os arquivos e pastas dentro do diretório /curso-javascript-e-typescript
