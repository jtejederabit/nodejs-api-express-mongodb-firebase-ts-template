// src/controllers/sampleController.ts
import { Request, Response } from 'express';

export const getSampleData = (req: Request, res: Response) => {
    res.json({ message: 'Hello, this is a sample controller!' });
};
