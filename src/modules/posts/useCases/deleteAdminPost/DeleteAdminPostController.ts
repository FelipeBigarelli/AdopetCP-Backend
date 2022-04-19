import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAdminPostUseCase } from './DeleteAdminPostUseCase';

class DeleteAdminPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAdminPostUseCase = container.resolve(DeleteAdminPostUseCase);

    await deleteAdminPostUseCase.execute(id);

    return response.status(201).send();
  }
}

export { DeleteAdminPostController };
