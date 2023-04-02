"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveriam existir (falha de segurança / o usuário teria acesso aos dados):
// router.get('/', loginRequired, userController.index); // lista usuários
// router.get('/:id', userController.show); // lista usuário

router.post('/', _loginRequired2.default, _UserController2.default.store); // não será mais possível criar usuário, pois precisa estar logado
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);
exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> exibe um usuário -> GET
update -> atualiza um usuário -> PATCH (atualiza um valor) OU PUT (substitui o objeto inteiro)
*/
