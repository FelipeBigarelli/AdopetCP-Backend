import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { validate } from 'uuid';

import { UploadPostImagesUseCase } from './UploadPostImagesUseCase';

interface IFiles {
  filename: string;
}

class UploadPostImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id: post_id } = request.params;
    const images = request.files as IFiles[];

    if (!images) {
      return response.status(400).json({ error: 'Files missing' });
    }

    if (!validate(post_id)) {
      return response.status(400).json({ error: 'Invalid UUID' });
    }

    const uploadPostImagesUseCase = container.resolve(UploadPostImagesUseCase);

    const fileNames = images.map((file) => file.filename);

    await uploadPostImagesUseCase.execute({
      user_id,
      post_id,
      images_name: fileNames,
    });

    return response.status(204).send();
  }
}

export { UploadPostImagesController };
