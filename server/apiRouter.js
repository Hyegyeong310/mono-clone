import express from 'express';
import routes from './routes';
import { getProblem, getSolutions } from './apiController';

const apiRouter = express.Router();

apiRouter.get(routes.problems, getProblem);
apiRouter.get(routes.solutions, getSolutions);

export default apiRouter;
