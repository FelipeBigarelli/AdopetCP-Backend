import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserProfileUseCase } from './UpdateUserProfileUseCase';

class UpdateUserProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const { name, email } = request.body;

    const updateUserProfileUseCase = container.resolve(
      UpdateUserProfileUseCase
    );

    await updateUserProfileUseCase.execute({
      id,
      name,
      email,
    });

    return response.status(201).send();
  }
}

export { UpdateUserProfileController };
