// src/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-access-token'); // Or the name you used to save the token in the headers

    if (!token) {
        return res.status(401).json({ error: 'No token provided.' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.body.uid = decodedToken.uid;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};

export default verifyToken;
