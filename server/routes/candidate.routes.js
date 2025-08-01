import express from 'express';
import { createCandidate } from '../controllers/candidate.controllers.js';

const router = express.Router();

// POST /fillcandidateform
router.post('/fillcandidateform', createCandidate);

export default router;