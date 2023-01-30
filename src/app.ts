import express from 'express';
import './Container';
import { apiLogger } from './Application/Rest/Middlewares/ApiLogger';
import bodyParser from 'body-parser';
import { apiErrorHandler } from './Application/Rest/Middlewares/ApiErrorHandler';
import { attachControllers } from '@decorators/express';
import RocketsController from './Application/Rest/Controllers/RocketsController';
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
const apiRouter = express.Router();

app.use(bodyParser.json());
app.use(apiLogger);

app.use('/api/v1', apiRouter);
attachControllers(apiRouter, [RocketsController]);

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

app.use(apiErrorHandler);
