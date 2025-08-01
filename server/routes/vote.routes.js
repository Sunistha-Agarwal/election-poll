import castVote from "../controllers/vote.controllers.js";
import express from 'express'

const router = express.Router()

router.post('/castYourVote',castVote)

export default router