// src/db.ts
import mongoose, { ConnectOptions } from 'mongoose';

export const connectToDB = async () => {
    try {
        const mongodbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions;
        await mongoose.connect('mongodb://localhost:27017/your-database', mongodbOptions);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to satabase:', error);
    }
};
