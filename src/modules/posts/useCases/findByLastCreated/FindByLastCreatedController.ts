import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByLastCreatedUseCase } from './FindByLastCreatedUseCase';

class FindByLastCreatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const findByLastCreatedUseCase = container.resolve(
      FindByLastCreatedUseCase
    );

    const lastPost = await findByLastCreatedUseCase.execute(user_id);

    return response.status(201).json(lastPost);
  }
}

export { FindByLastCreatedController };
