import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserPostsUseCase } from './ListUserPostsUseCase';

class ListUserPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserPostsUseCase = container.resolve(ListUserPostsUseCase);

    const posts = await listUserPostsUseCase.execute(id);

    return response.status(201).json(posts);
  }
}

export { ListUserPostsController };
