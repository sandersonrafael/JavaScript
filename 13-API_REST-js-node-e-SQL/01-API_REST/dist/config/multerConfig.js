"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.round((Math.random() * 10000) + 10000);
// ^ usado no nome das fotos para garantir que todas terão nomes diferentes

exports. default = {
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            return cb(new _multer2.default.MulterError('Arquivo em formato inválido.'));
        } // se o tipo de arquivo for diferente de png ou jpeg, vai gerar erro e não vai subir a imagem
        return cb(null, true);
    },

    storage: _multer2.default.diskStorage({
        destination: (req, file, cb) => { // cb = callback
            cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images')); // caminho onde será salvo o arquivo, na pasta uploads
        }, // ^ primeiro parâmetro é o null para caso apresente erro
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`); // para que não ocorra problema, cada foto terá um nome que será o horário atual, com um milissegundo específico
        }, // extname pegará a extensão e botará após o milissegundo atual referente ao nome da ft
    }),
};
