import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListByCategoryUseCase } from './ListByCategoryUseCase';

class ListByCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_name } = request.body;

    const listByCategoryUseCase = container.resolve(ListByCategoryUseCase);

    const posts = await listByCategoryUseCase.execute(category_name);

    return response.status(201).json(posts);
  }
}

export { ListByCategoryController };
