import * as express from 'express';
import mongoose = require("mongoose");

mongoose.Promise = global.Promise as any;

var options = { server : { socketOptons: { keepAlive : 1 } } };

const app: express.Application = express();

// if ( app.get('env') === 'production' ) {
//     mongoose.connect('mongodb://happystatadmin:admin@ds147487.mlab.com:47487/happy-stat', options);
// } else {
//     mongoose.connect('mongodb://localhost:27017/happy-stat', options);
// }

mongoose.connect('mongodb://happystatadmin:admin@ds147487.mlab.com:47487/happy-stat', options);

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', console.log);

export { mongoose };
