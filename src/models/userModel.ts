import { RowDataPacket } from "mysql2";
import db from "../config/db";

export interface IUser {
  id: number;
  username: string;
  password: string;
  firebase_uid: string;
}

export const createUser = (
  username: string,
  password: string,
  firebaseUid: string
): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    const query =
      "INSERT INTO users (username, password, firebase_uid) VALUES (?, ?, ?)";
    db.execute(query, [username, password, firebaseUid], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const findUserById = (userId: number): Promise<IUser | null> => {
  return new Promise<IUser | null>((resolve, reject) => {
    db.execute(
      "SELECT * FROM users WHERE id = ?",
      [userId],
      (err, results: RowDataPacket[]) => {
        if (err) {
          reject(err);
        } else if (results.length > 0) {
          resolve(results[0] as any);
        } else {
          resolve(null);
        }
      }
    );
  });
};
