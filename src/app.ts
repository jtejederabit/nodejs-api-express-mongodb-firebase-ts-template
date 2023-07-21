// src/app.ts
import express, { Express } from 'express';
import admin from 'firebase-admin';
import generalRoutes from "./routes/generalRoutes";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import { connectToDB } from "./utils/db";

// Configurar Firebase Admin (asegúrate de colocar el path correcto hacia tus credenciales)
const serviceAccount = require('./your-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'firebase-database-url
    storageBucket: 'firebase-storage-bucket',
});

const app: Express = express();
app.use(express.json());

app.use(
    '/api',
    generalRoutes,
    adminRoutes,
    userRoutes
);

connectToDB();

export default app;
