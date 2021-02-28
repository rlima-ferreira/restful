import { Router } from 'express';
import StateController from '../controllers/StateController';

const router = Router();
const controller = new StateController();

router.route('/')
  .get(controller.index)
  .post(controller.store);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.delete);

export default router;