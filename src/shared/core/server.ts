import express from 'express';
import usersRouter from '../../modules/users/routes/routes';

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/v1/users', usersRouter);
  }
}
