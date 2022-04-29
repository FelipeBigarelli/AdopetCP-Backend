import { inject, injectable } from 'tsyringe';

import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

interface IRequest {
  user_id: string;
  post_id: string;
  images_name: string[];
}

@injectable()
class UploadPostImagesUseCase {
  constructor(
    @inject('PostImagesRepository')
    private postImagesRepository: IPostImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ user_id, post_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.postImagesRepository.create(user_id, post_id, image);

      await this.storageProvider.save(image, 'photo');
    });
  }
}

export { UploadPostImagesUseCase };
