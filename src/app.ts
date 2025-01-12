import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import userRoutes from './routes/userRoutes';
// import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app = express();

// Use Helmet to secure HTTP headers
app.use(helmet());

// Enable CORS with appropriate options (to be adjusted based on your app needs)
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',  // Adjust to your domain or environment variable
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Apply rate-limiting to prevent brute force attacks (basic example)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit to 100 requests per 15 minutes
  message: 'Too many requests, please try again later.',
});
app.use(limiter);

// Parse JSON bodies
app.use(express.json());

// Connect to DB
// connectDB();

// User routes
// app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
