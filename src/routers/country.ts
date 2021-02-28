import { Router } from 'express';
import CountryController from '../controllers/CountryController';

const router = Router();
const controller = new CountryController();

router.route('/')
  .get(controller.index)
  .post(controller.store);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.delete);

export default router;