import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadPostImagesUseCase } from './UploadPostImagesUseCase';

interface IFiles {
  filename: string;
}

class UploadPostImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id: post_id } = request.params;
    const images = request.files as IFiles[];

    const uploadPostImagesUseCase = container.resolve(UploadPostImagesUseCase);

    const image_name = images.map((file) => file.filename);

    console.log(image_name);

    await uploadPostImagesUseCase.execute({
      user_id,
      post_id,
      image_name,
    });

    return response.status(201).send();
  }
}

export { UploadPostImagesController };
