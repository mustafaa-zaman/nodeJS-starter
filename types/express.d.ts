import { Request } from "express";

// Extend Express Request type to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: any; // Add user property with your User type
    }
  }
}
