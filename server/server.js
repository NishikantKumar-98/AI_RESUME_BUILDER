import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRouter from './router/userRoutes.js';
import resumeRouter from './router/resumeRoutes.js';
import aiRouter from './router/aiRoutes.js';

await connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=> res.send("server is live..."))
app.use('/api/users',userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})