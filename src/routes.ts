import express, { Request, Response } from 'express';
import channelRoutes from './channels/routes';

// Setup routes. Each modules sets up their own child routes.
const router = express.Router();
router.get('/', (_req: Request, res: Response) =>
  res.send('Server running...'),
);
router.use('/channels', channelRoutes);

export default router;
