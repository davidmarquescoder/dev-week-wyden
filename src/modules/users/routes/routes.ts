import { Router } from 'express';

// Controllers
import Controllers from '../controllers/controllers';

const router = Router();
const controller = new Controllers();

// Index
router.get('/', controller.index);

// Show
router.get('/:id', controller.show);

// Create
router.post('/', controller.create);

// Update
router.put('/:id', controller.update);

// Delete
router.delete('/:id', controller.delete);

export default router;
