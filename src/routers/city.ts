import { Router } from 'express';
import CityController from '../controllers/CityController';

const router = Router();
const controller = new CityController();

router.route('/')
  .get(controller.index)
  .post(controller.store);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.delete);

export default router;