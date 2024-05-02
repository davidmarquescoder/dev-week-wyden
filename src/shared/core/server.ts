import express from 'express';

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {}
}
