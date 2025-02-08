import express from 'express';
import { signupUser } from '../controllers/authController.js';
import { loginUser } from '../controllers/authController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/signup', upload.single("profilePic"), signupUser);
router.post('/login', loginUser);


export default router;