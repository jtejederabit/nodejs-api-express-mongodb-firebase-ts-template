// Note: User Routes
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/app/user/:userId', (req: Request, res: Response) => {
    res.json({ message: 'Get users' });
});
router.put('/app/user', (req: Request, res: Response) => {
    res.json({ message: 'Update users' });
});
router.post('/app/user', (req: Request, res: Response) => {
    res.json({ message: 'Add users' });
});
router.delete('/app/user', (req: Request, res: Response) => {
    res.json({ message: 'Delete users' });
});

export default router;
