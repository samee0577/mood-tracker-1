import express, { Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;
import moodRoutes from './routes/moodRoutes.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/moods", moodRoutes);
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});