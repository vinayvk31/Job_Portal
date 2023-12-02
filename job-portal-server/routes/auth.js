import express from 'express'


import {registerController, loginController, registerCompanyController, loginCompanyController} from '../controllers/authController.js';

const router = express.Router()

router.post('/register-user', registerController);
router.post('/register-company', registerCompanyController);
router.post('/login-user', loginController);
router.post('/login-company', loginCompanyController);
 

export default router;