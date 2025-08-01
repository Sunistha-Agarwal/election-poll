import User from '../models/user.models.js'

const requireVoter = async (req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ error: 'Unauthorized: No user information' });
        }
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.role !== 'Voter') {
            return res.status(403).json({ error: 'Only voters allowed' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Only admin
const requireAdmin = async(req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ error: 'Unauthorized: No user information' });
        }
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.role !== 'Admin') {
            return res.status(403).json({ error: 'Admins only' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Only candidate or admin
const requireCandidateOrAdmin = async(req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ error: 'Unauthorized: No user information' });
        }
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.role!== 'Candidate' || user.role !== 'Admin') {
            return res.status(403).json({ error: 'Candidates or Admins only' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Only admin or voter
const requireAdminOrVoter = async(req, res, next) => {
    console.log(req.user)
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ error: 'Unauthorized: No user information' });
        }
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.role !== 'Admin' && user.role !== 'Voter') {
            return res.status(403).json({ error: 'Admins or Voters only' });
        }
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {requireAdmin,requireAdminOrVoter,requireCandidateOrAdmin,requireVoter}