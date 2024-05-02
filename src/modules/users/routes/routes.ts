import { Router } from 'express';

const router = Router();

// Index
router.get('/');

// Show
router.get('/:id');

// Create
router.post('/');

// Update
router.put('/:id');

// Delete
router.delete('/:id');

export default router;
