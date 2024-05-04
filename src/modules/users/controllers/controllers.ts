import { Request, Response } from 'express';
import User from '../entities/user';

const database: User[] = [];

export default class Controllers {
  index(request: Request, response: Response): Response {
    return response.status(200).json({ database });
  }

  show(request: Request, response: Response): Response {
    const { id } = request.params;
    const user: User | undefined = database.find((user) => user.id === id);

    return response.status(200).json({ user });
  }

  create(request: Request, response: Response): Response {
    const data = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      phone: request.body.phone,
    };

    const user = new User(data);
    database.push(user);

    return response.status(201).json(user);
  }

  update(request: Request, response: Response): Response {
    const { id } = request.params;

    const data = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      phone: request.body.phone,
      id: id,
    };

    const index: number = database.findIndex((user) => user.id === id);
    database[index] = data;

    return response.status(200).json({ updated: database[index] });
  }

  delete(request: Request, response: Response): Response {
    const { id } = request.params;

    const index = database.findIndex((user) => user.id === id);

    if (index >= 0) {
      const userDeleted = database[index];

      database.splice(index, 1);

      return response.status(200).json({ db: database, deleted: { id: userDeleted.id, name: userDeleted.name } });
    } else {
      return response.status(400).json({ message: 'User Not Found!' });
    }
  }
}
