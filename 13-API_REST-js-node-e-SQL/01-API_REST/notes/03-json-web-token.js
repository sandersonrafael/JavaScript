/* JSON Web Token

é utilizado para manter o usuário com acesso à base de dados através dos métodos CRUD
o usuário recebe um token que é sepmre validado antes de alterações, podendo ficar
ativo por uma quantidade determinada de dias

editar arquivo .env com:

TOKEN_SECRET=tokenAleatorioDigitadoManualmente
TOKEN_EXPIRATION=numdias (7d, por exemplo)

instalar no terminal:
npm install jsonwebtoken
*/
