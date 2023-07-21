// Note: Admin Routes
import { Router, Request, Response } from 'express';
import { applyAuthMiddlewareToRouter } from '../utils/routerUtils';

const router: Router = Router();

// Apply verifyToken middleware to all routes in a router
applyAuthMiddlewareToRouter(router);

router.get('/admin/user/:userId', (req: Request, res: Response) => {
    res.json({ message: 'Get user info' });
});
export default router;
