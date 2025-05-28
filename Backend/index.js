// index.js (main server file)
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import route from './Router/user.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser()); // ➤ Add this

const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGODB_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(console.error);

app.use('/api/user', route);
