import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { validate } from 'uuid';

import { ListPostImagesUseCase } from './ListPostImagesUseCase';

class ListPostImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: post_id } = request.params;

    console.log(post_id);

    if (!validate(post_id)) {
      return response.status(400).json({ error: 'Invalid UUID' });
    }

    const listPostImagesUseCase = container.resolve(ListPostImagesUseCase);

    const postImages = await listPostImagesUseCase.execute(post_id);

    return response.status(201).json(postImages);
  }
}

export { ListPostImagesController };
