import express from 'express';
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
} from './../controllers/room.js';
import { verifyAdmin } from '../utils/verifying.js';

const router = express.Router();

// CREATE
router.post('/:hotelid', verifyAdmin, createRoom);

// UPDATE
router.put('/:id', verifyAdmin, updateRoom);

// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

// GET
router.get('/:id', getRoom);

// GET ALL
router.get('/', getAllRoom);

export default router;
