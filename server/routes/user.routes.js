import express from 'express'

//controller functions
import { loginUser, signupUser } from '../controllers/user.controllers.js'

const router = express.Router()

//login route
router.post('/login', loginUser)

//signup route
router.post('/register', signupUser)

export default router