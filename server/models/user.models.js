import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Voter', 'Candidate', 'Admin'],
        required: true
    },
},{timestamps: true})

userSchema.statics.signup = async function(name, email, password, role) {
    if(!name|| !email || !password || !role){
        throw Error('All fields are required')
    }

    if(!validator.isEmail(email)){
        throw Error('Enter a valid Email')
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash, role })
    
    return user
}

userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields are required')
    }

    const user = await this.findOne({email})

    if(!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

export const User = mongoose.model('User',userSchema)