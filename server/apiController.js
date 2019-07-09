import data from './db';

export const getData = (req, res) => {
  res.status(200).send(data);
};
