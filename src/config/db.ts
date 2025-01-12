
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      process.exit(1);
    }
    console.log('MySQL connected!');
  });
};

export default db;
    