import mongoose from 'mongoose'

const voteSchema = new mongoose.Schema({
    votedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
        unique:true
    },
    votedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required:true
    },
    deviceId: {
        type: String,
        required: true
    }
},{timestamps: true})

const Vote = mongoose.model("Vote", voteSchema)

export default Vote