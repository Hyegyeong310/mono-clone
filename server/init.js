import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';

import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    },
    app
  )
  .listen(PORT, handleListening);
