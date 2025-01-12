import admin from 'firebase-admin';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Initialize Firebase Admin SDK with service account
const serviceAccount = path.join(__dirname, 'firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firestore = admin.firestore();
export const auth = admin.auth();