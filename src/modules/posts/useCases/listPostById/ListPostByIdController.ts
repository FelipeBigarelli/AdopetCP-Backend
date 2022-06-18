import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPostByIdUseCase } from './ListPostByIdUseCase';

class ListPostByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listPostByIdUseCase = container.resolve(ListPostByIdUseCase);

    const post = await listPostByIdUseCase.execute(id);

    return response.status(201).json(post);
  }
}

export { ListPostByIdController };
