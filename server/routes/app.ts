import { Router, Request, Response, NextFunction } from 'express';
import { Location } from '../models/location/location';
import { Score } from '../models/score/score';

export class AppRouter {

    private router: Router = Router();

    getRouter(): Router {

        // Get all locations
        this.router.get("/locations", async(request: Request, response: Response) => {

            const locations = await Location.find({}).exec();

            for ( let location of locations ) {
                var scores = (await Score.findAllByLocation(String(location._id)) as any);

                var numberOfScores = 0;
                var scoreTotal = 0;
                var cijfer = 0;

                if ( scores.length ) {
                    for ( let score of scores ) {
                        numberOfScores++;
                        scoreTotal += score.score;
                    }

                    cijfer = (scoreTotal / numberOfScores) / 10;
                }
                

                location.score = cijfer;
            }

            response.json(locations)
        });

        // Get location by name
        this.router.get("/locations/:name", async(request: Request, response: Response) => {

            var name = request.params.name;

            const location = await Location.findOne({'name' : name}).lean().exec();

            response.json(location);
        });

        // Create a new location
        this.router.post("/locations", async(request: Request, response: Response) => {

            const location = await Location.create(request.body);

            response.status(200).json(location);
        });

        // Register a new score for a location
        this.router.post("/locations/:name/score", async(request: Request, response: Response) => {

            // Find location
            var name = request.params.name;
            const location = await Location.findOne({'name' : name}).lean().exec();

            // Create new score 
            var newScore = request.body;
            newScore.location = (location as any)._id;
            
            const score = await Score.create(newScore);

            response.status(200).json(score);
        });

        // Get all scores for a specific location
        this.router.get("/locations/:name/score", async(request: Request, response: Response) => {
            
            // Find location
            var name = request.params.name;
            const location = await Location.findOne({'name' : name}).lean().exec();

            const scores = await Score.findAllByLocation(String((location as any)._id));

            response.status(200).json(scores);
        });

        return this.router;
    }
}