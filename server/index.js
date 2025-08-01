import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db.config.js";

import userRoutes from './routes/user.routes.js'
import voteRoutes from './routes/vote.routes.js'
import requireAuth from "./middlewares/auth.middlewares.js";
import {requireVoter} from './middlewares/roles.middleware.js'
import candidateRoutes from './routes/candidate.routes.js'
import cors from 'cors'

config()
connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin: 'https://election-poll-inky.vercel.app/'}))

app.use(express.json())

app.use('/api/user',userRoutes)
app.use('/api/voter',requireAuth, requireVoter,voteRoutes)
app.use('/api/candidate', requireAuth, candidateRoutes)

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})