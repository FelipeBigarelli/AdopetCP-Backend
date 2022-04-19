import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLastPostsUseCase } from './ListLastPostsUseCase';

class ListLastPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLastPostsUseCase = container.resolve(ListLastPostsUseCase);

    const posts = await listLastPostsUseCase.execute();

    return response.status(201).json(posts);
  }
}

export { ListLastPostsController };
