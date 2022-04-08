import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeletePostUseCase } from './DeletePostUseCase';

class DeletePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePostUseCase = container.resolve(DeletePostUseCase);

    await deletePostUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeletePostController };
