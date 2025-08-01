import express from 'express';
import { createCandidate,getAllCandidates, deleteCandidate } from '../controllers/candidate.controllers.js';
import { requireAdmin, requireCandidateOrAdmin, requireAdminOrVoter,requireVoter } from '../middlewares/roles.middleware.js';

const router = express.Router();

router.post('/candidate', requireCandidateOrAdmin, createCandidate);
router.get('/candidate', requireAdminOrVoter, getAllCandidates);
router.delete('/candidate/:id', requireAdmin, deleteCandidate);

export default router;