import express from 'express';
import morgan from 'morgan';
import config from './src/config/index.js';
import logger from './src/logger/logger.js';

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  logger.info(`Starting Watchtower on  port ${config.APP.PORT}`);
});

process.on('uncaughtException', (error) => {
  logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
  process.exit(1);
});

process.on('SIGINT', () => {
  logger.info(' Alright! Bye bye!');
  process.exit();
});
