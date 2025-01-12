
import { Request, Response } from 'express';
import {  createUser, findUserById } from '../models/userModel';
import { validateUser } from '../utils/validation';

export const getUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const user = await findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
    