import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import apiRouter from './apiRouter';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes.api, apiRouter);

export default app;
