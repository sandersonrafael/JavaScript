import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir:
// router.get('/', loginRequired, userController.index); // lista usuários
// router.get('/:id', userController.show); // lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> exibe um usuário -> GET
update -> atualiza um usuário -> PATCH (atualiza um valor) OU PUT (substitui o objeto inteiro)
*/
