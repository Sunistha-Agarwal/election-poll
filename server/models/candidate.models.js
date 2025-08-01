import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema({
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photourl: {
        type: String
    },
    workExp: {
        type: String,
        required: true
    },
    pitch: {
        type: String,
        required: true
    },
    slogan: {
        type: String
    },
    votes: {
        type: Number
    }
},{timestamps: true})

const Candidate = mongoose.model('Candidate', candidateSchema)
export default Candidate