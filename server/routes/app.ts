import { Router, Request, Response, NextFunction } from 'express';
import { Location } from '../models/location/location';
import { Score } from '../models/score/score';

export class AppRouter {

    private router: Router = Router();

    getRouter(): Router {

        // Get all locations
        this.router.get("/locations", async(request: Request, response: Response) => {

            const locations = await Location.find({}).lean().exec();

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
            newScore.location = location._id;
            
            const score = await Score.create(newScore);

            response.status(200).json(score);
        });

        // Get all scores for a specific location
        this.router.get("/locations/:name/score", async(request: Request, response: Response) => {
            
            // Find location
            var name = request.params.name;
            const location = await Location.findOne({'name' : name}).lean().exec();
            
            console.log(location._id);

            const scores = await Score.findAllByLocation(String(location._id));

            response.status(200).json(scores);
        });

        return this.router;
    }
}



// const appRouter: Router = Router();

// /**
//  * Get all locations
//  */
// appRouter.get('/locations', function (request: Request, response: Response) {

//     response.json({
//         test : 'Jens Hoevenaars'
//     });
// });

// /**
//  * Get location by name 
//  */
// appRouter.get('/locations', function (request: Request, response: Response) {

// });

// /**
//  * Create new location
//  */
// appRouter.post('/location', function (request: Request, response: Response) {
    
//     const location = await Location.create(request.body);

//     response.status(200).json(location);
// });

// export { appRouter }