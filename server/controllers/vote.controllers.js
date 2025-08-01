import Vote from '../models/vote.models.js'
import Candidate from '../models/candidate.models.js'

const castVote = async(req,res,next) => {
        try {
            const { deviceId, votedTo } = req.body;
            const votedBy = req.user._id;

            // Check if voter has already registered
            const existingVote = await Vote.findOne({ votedBy });
            if (existingVote) {
                return res.status(400).json({ message: 'Voter has already voted.' });
            }

            // Check if deviceId is unique
            // const deviceUsed = await Vote.findOne({ deviceId });
            // if (deviceUsed) {
            //     return res.status(400).json({ message: 'Device has already been used to vote.' });
            // }

            //check if candidate is valid or not
            const candidate = await Candidate.findById(votedTo);
            if (!candidate) {
                return res.status(404).json({ message: 'Candidate not found.' });
            }

            await Vote.create({ votedBy, deviceId, votedTo });
            await Candidate.updateOne(
                { _id: votedTo },
                { $inc: { votes: 1 } }
            );


            return res.status(201).json({ message: 'Vote cast successfully.' });
        } catch (error) {
            console.error('Error casting vote:', error);
            return res.status(500).json({ message: 'An error occurred while casting the vote.', error: error.message });
        }
    };

export default castVote