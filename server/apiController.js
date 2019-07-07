import data from './db';

export const getData = (req, res) => {
  res.send(data);
};
