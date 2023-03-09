import express from 'express';
import { listChannels } from './channels-controller';

const router = express.Router();
router.get('/', listChannels);

export default router;
