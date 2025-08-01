import User from '../models/user.models.js'

const notRequireVoter = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        console.log(user)
        if (user.role === 'Voter') {
            return res.status(403).json({ error: 'Voters Not Allowed' })
        }
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default notRequireVoter