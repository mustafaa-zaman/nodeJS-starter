"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
const connectDB = () => {
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err.stack);
            process.exit(1);
        }
        console.log('MySQL connected!');
    });
};
exports.connectDB = connectDB;
exports.default = db;
