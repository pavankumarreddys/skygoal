import express  from "express";
import {registerController,loginController,userDataController} from '../controllers/authController.js'
import {  requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing

//REGISTER ||METHOD POST
router.post('/register',registerController)
//registerController is on js file

//Logig || POST METHOD
router.post('/login',loginController)

//Token verify and get user data 
router.get('/getUserData',requireSignIn,userDataController)

export default router