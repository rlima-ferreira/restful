import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const router = Router();
const controller = new AddressController();

router.route('/')
  .get(controller.index)
  .post(controller.store);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.delete);

export default router;