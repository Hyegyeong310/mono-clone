import express from 'express';
import routes from './routes';
import { getData } from './apiController';

const apiRouter = express.Router();

apiRouter.get(routes.data, getData);

export default apiRouter;
