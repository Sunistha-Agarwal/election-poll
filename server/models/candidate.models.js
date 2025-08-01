import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema({
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type:String,
        required:true
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
        type: String,
        required:true
    },
    votes: {
        type: Number
    }
},{timestamps: true})

const Candidate = mongoose.model('Candidate', candidateSchema)
export default Candidate