import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { EditPostUseCase } from './EditPostUseCase';

class EditPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
    } = request.body;

    const { id: requestId } = request.params;

    const userId = request.user.id;

    const editPostUseCase = container.resolve(EditPostUseCase);

    await editPostUseCase.execute({
      id: requestId,
      title,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      user_id: userId,
    });

    return response.status(201).send();
  }
}

export { EditPostController };
