import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePostUseCase } from './CreatePostUseCase';

class CreatePostController {
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
      category_name,
    } = request.body;

    const userId = request.user.id;

    const createPostUseCase = container.resolve(CreatePostUseCase);

    await createPostUseCase.execute({
      title,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      category_name,
      user_id: userId,
    });

    return response.status(201).send();
  }
}

export { CreatePostController };
