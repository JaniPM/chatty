import express, { Express } from 'express';
import cors from 'cors';
import router from './routes';
import { logRequest } from './middleware/log-request';
import { logger } from './core/logger';

const app: Express = express();

// Setup middleware
app.use(cors());
app.use(logRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach routes
app.use('/api/v1/', router);

// Start the server
const port = 3000;
app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
