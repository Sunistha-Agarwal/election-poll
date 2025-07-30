import express from 'express'

//controller functions
import { loginUser, signupUser } from '../controller/user.controller.js'

const router = express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/register', signupUser)

export default router