import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { NotificatePostUseCase } from './NotificatePostUseCase';

class NotificatePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const notificatePostUseCase = container.resolve(NotificatePostUseCase);

    const returnPost = await notificatePostUseCase.execute(id);

    return response.json(returnPost);
  }
}

export { NotificatePostController };
