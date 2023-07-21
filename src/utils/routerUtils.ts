// src/routerUtils.ts
import { Router, Request, Response, NextFunction } from 'express';
import verifyToken from './authMiddleware';

// Apply verifyToken middleware to all routes in a router
export const applyAuthMiddlewareToRouter = (router: Router) => {
    router.use(verifyToken);
};
