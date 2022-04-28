import { inject, injectable } from 'tsyringe';

import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';

interface IRequest {
  user_id: string;
  post_id: string;
  image_name: string[];
}

@injectable()
class UploadPostImagesUseCase {
  constructor(
    @inject('PostImagesRepository')
    private postImagesRepository: IPostImagesRepository
  ) {}

  async execute({ user_id, post_id, image_name }: IRequest) {
    image_name.map(async (image) => {
      await this.postImagesRepository.create(user_id, post_id, image);
    });
  }
}

export { UploadPostImagesUseCase };
