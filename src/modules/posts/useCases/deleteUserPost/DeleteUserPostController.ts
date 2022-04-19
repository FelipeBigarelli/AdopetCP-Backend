import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserPostUseCase } from './DeleteUserPostUseCase';

class DeleteUserPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: user_id } = request.user;

    const deleteUserPostUseCase = container.resolve(DeleteUserPostUseCase);

    await deleteUserPostUseCase.execute(id, user_id);

    return response.status(201).send();
  }
}

export { DeleteUserPostController };
