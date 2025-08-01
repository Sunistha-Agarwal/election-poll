import Candidate from '../models/candidate.models.js';


export const createCandidate = async (req, res) => {
    try {
        const {photourl, workExp, pitch, slogan } = req.body;
        const candidateId = req.user._id;

        // Basic validation
        if (!candidateId || !workExp || !pitch) {
            return res.status(400).json({ message: 'candidateId, workExp, and pitch are required.' });
        }

        const candidate = await Candidate.create({
            candidateId,
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
