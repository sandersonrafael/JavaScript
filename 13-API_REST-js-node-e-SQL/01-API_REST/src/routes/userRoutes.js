import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> exibe um usuário -> GET
update -> atualiza um usuário -> PATCH (atualiza um valor) OU PUT (substitui o objeto inteiro)
*/
