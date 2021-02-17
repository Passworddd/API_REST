import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/**
 index -> lista todos os usuário -> GET
 store/create -> cria um usuário -> POST
 delete -> apaga um usuário      -> DELETE
 show -> mostra um usuário       -> GET
 update -> atualiza              -> PATCH ou PUT
 */
