import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllPostsUseCase } from './ListAllPostsUseCase';

class ListAllPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllPostsUseCase = container.resolve(ListAllPostsUseCase);

    const posts = await listAllPostsUseCase.execute();

    return response.status(201).json(posts);
  }
}

export { ListAllPostsController };
