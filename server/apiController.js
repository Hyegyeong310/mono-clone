import { problems, solutions } from './db';

export const getProblem = (req, res) => {
  res.send(problems);
};

export const getSolutions = (req, res) => {
  res.send(solutions);
};
