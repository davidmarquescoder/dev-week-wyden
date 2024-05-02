import { Request, Response } from 'express';

export default class Controllers {
  index(request: Request, response: Response): Response {
    return response.status(200).json({});
  }

  show(request: Request, response: Response): Response {
    return response.status(200).json({});
  }

  create(request: Request, response: Response): Response {
    return response.status(201).json({});
  }

  update(request: Request, response: Response): Response {
    return response.status(200).json({});
  }

  delete(request: Request, response: Response): Response {
    return response.status(200).json({});
  }
}
