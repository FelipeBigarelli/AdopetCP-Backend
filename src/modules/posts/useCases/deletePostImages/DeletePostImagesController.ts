import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeletePostImagesUseCase } from './DeletePostImagesUseCase';

class DeletePostImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { post_id, id: image_id } = request.params;
    const { id: user_id } = request.user;

    const deletePostImagesUseCase = container.resolve(DeletePostImagesUseCase);

    await deletePostImagesUseCase.execute(user_id, post_id, image_id);

    return response.status(204).send();
  }
}

export { DeletePostImagesController };
