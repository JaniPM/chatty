import { Request, Response } from 'express';

/**
 * List all channels
 */
export function listChannels(req: Request, res: Response) {
  res.send([]);
}
