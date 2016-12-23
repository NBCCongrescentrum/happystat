import { Router, Request, Response, NextFunction } from 'express';
import { Score } from '../models/score';

export class AppRouter {

  private router: Router = Router();

  getRouter(): Router {

    this.router.get("/scores", async(request: Request, response: Response) => {
        const scores = await Score.getAll();
        response.json(scores);
    });

    return this.router;
  }
}
