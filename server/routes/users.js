import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} from './../controllers/user.js';
import { verifyUser, verifyAdmin } from '../utils/verifying.js';

const router = express.Router();

// /* authenticate user and admin */
// router.get('/check-authentication', verifyToken, (req, res, next) => {
//   res.send('Hello! you are logged in');
// });

// router.get('/check-user/:id', verifyUser, (req, res, next) => {
//   res.send('you can update or delete your account');
// });

// router.get('/check-admin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin!');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getAllUser);

export default router;
