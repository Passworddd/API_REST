import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 index -> lista todos os usuário -> GET
 store/create -> cria um usuário -> POST
 delete -> apaga um usuário      -> DELETE
 show -> mostra um usuário       -> GET
 update -> atualiza              -> PATCH ou PUT
 */
