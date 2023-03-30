/* multer

o express não possui suporte nativamente ao upload de arquivos. para isso,
é necessário instalar o multer através do comando:
npm install multer

no insomnia, é necessário criar um post, que em vez do json, utiliza-se do Multipart
o nome do multipart será usado dentro da aplicação, então é necessário utlizar um nome útil
clicar no campo value e substituir por "Choose File"

criar arquivo multerConfig.js dentro da pasta config
usar as seguintes configurações:

import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.round(Math.random * 10000 + 10000);

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => { // cb = callback
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        }, // ^ primeiro parâmetro é o null para caso apresente erro
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        }, // extname pegará a extensão e botará após o milissegundo atual referente ao nome da ft
    }),
};

importar o multer do node_modules no arquivo fotoRoutes:
import multer from 'multer';
import multerConfig from '../config/multerConfig';

importar o multerConfig que foi criado agora e utilizar a função do multer:
const upload = multer(multerConfig) -> essa constante será utilizada como middleware para obter arquivo

inserir na rota:
router.post('/', upload.single('foto'), fotoController.store);
middleware upload ^ usa-se single para um arquivo -> dentro vai o nome no insomnia

agora, no controller, dentro da função store() criada, teremos acesso ao req.file
essa parâmetro retornará todas informações do arquivo que foi feito upload

ex tirado do insomnia:
{
    "fieldname": "foto",
    "originalname": "4a02a3a272bac59edbc83d659d53250cd38db66a-firefox_logo.png",
    "encoding": "7bit",
    "mimetype": "image/png",
    "destination": "/home/rafael/Desktop/Cursos/js-e-ts/13-API_REST-js-node-e-SQL/01-API_REST/uploads",
    "filename": "1680211231574_12189.png",
    "path": "/home/rafael/Desktop/Cursos/js-e-ts/13-API_REST-js-node-e-SQL/01-API_REST/uploads/1680211231574_12189.png",
    "size": 25416
}
*/
