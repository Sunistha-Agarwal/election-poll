import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const createToken = _id => 
    jwt.sign({_id}, process.env.SECRET, {expiresIn : '1hr'})

const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        //create a token
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) => {
    const {name, email, password, role } = req.body

    try {
        const user = await User.signup(name, email, password, role) 
        
         if(!user) 
            return res.status(400).json({ error: "Signup failed" })
        
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export {loginUser, signupUser}