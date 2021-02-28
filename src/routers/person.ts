import { Router } from 'express';
import PersonController from '../controllers/PersonController';

const router = Router();
const controller = new PersonController();

router.route('/')
  .get(controller.index)
  .post(controller.store);

router.route('/:cpf')
  .get(controller.show);

router.route('/:id')
  .put(controller.update)
  .delete(controller.delete);

export default router;