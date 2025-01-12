"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// import { connectDB } from './config/db';
const errorMiddleware_1 = require("./middleware/errorMiddleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Use Helmet to secure HTTP headers
app.use((0, helmet_1.default)());
// Enable CORS with appropriate options (to be adjusted based on your app needs)
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || '*', // Adjust to your domain or environment variable
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
// Apply rate-limiting to prevent brute force attacks (basic example)
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit to 100 requests per 15 minutes
    message: 'Too many requests, please try again later.',
});
app.use(limiter);
// Parse JSON bodies
app.use(express_1.default.json());
// Connect to DB
// connectDB();
// User routes
// app.use('/api/users', userRoutes);
// Error handling middleware
app.use(errorMiddleware_1.errorHandler);
exports.default = app;
