/* Eslint

utilizado para sugerir correções / corrigir o código de acordo com determinados padrões

instalação:
npm init -y
npx eslint --init // se não der, utilizar primeiro npm install eslint

configuração:
To check syntax, find problems, and enforce code style
JavaScript modules (import/export)
None of theses // projeto será API REST. Mas se for react ou vue, usar estes
TypeScript: No
Node
Use a popular style guide
Airbnb
JavaScript
Yes
npm

configuração 2:

adicionar nas configs do aplicativo code settings.json:
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }

se alguma regra atrapalhar no desenvolvimento do programa, ir na parte do código e pousar o mouse
o code indicará qual o erro. Basta copiar o erro e colar em rules do .eslintrc.js,
como string, como:
no-console
faz-se:

'no-console': 'off'

para deixar indentação de 4, em vez de 2, coloca rule:
indent: ['error', 4]

é possível apagar a regra também no próprio código com comentário, como:
// eslint-disable-next-line -> próxima linha não apresentará erros do eslint

ou

codigoEComandos // eslint-disable-line -> desabilitará o eslint na linha atual

*/
console.log(15); // eslint-disable-line

/* sucrase

serve para poder fazer import e export dos modules ES6, do javascript
npm i nodemon sucrase --save-dev ou
npm i nodemon sucrase -D

criar arquivo nodemon.json
criar objeto:
{
    "execMap" : {
        "js": "node -r sucrase/register"
    }
}

no package.json, criar um script "dev": "nodemon server.js"
*/
