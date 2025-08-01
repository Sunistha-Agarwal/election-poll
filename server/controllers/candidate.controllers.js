import Candidate from '../models/candidate.models.js';
import mongoose from 'mongoose';
export const getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();
        if (!candidates || candidates.length === 0) {
            return res.status(404).json({ message: 'No candidates found' });
        }
        res.status(200).json({ candidates });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching candidates', error: error.message });
    }
};

export const createCandidate = async (req, res) => {
    try {
        const {name, photourl, workExp, pitch, slogan } = req.body;
        const candidateId = req.user._id;

        // Basic validation
        if (!candidateId || !workExp || !pitch || !name) {
            return res.status(400).json({ message: 'candidateId, workExp, name and pitch are required.' });
        }

        const candidate = await Candidate.create({
            candidateId,
            name,
            photourl,
            workExp,
            pitch,
            slogan,
            votes: 0
        });

        res.status(201).json({ message: 'Candidate created successfully', candidate });
    } catch (error) {
        res.status(500).json({ message: 'Error creating candidate', error: error.message });
    }
};

export const deleteCandidate = async (req, res) => {
    // Check both req.params and req.body for id
    const id = req.body.id || req.params.id;

    if (!id) {
        return res.status(400).json({ message: 'Candidate id is required.' });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid candidate id.' });
    }

    try {
        const candidate = await Candidate.findByIdAndDelete(id);

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found.' });
        }

        res.status(200).json({ message: 'Candidate deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting candidate', error: error.message });
    }
};