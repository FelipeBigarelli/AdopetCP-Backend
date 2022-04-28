import { inject, injectable } from 'tsyringe';

import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

interface IRequest {
  user_id: string;
  post_id: string;
  image_name: string[];
}

@injectable()
class UploadPostImagesUseCase {
  constructor(
    @inject('PostImagesRepository')
    private postImagesRepository: IPostImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ user_id, post_id, image_name }: IRequest) {
    const postImages = await this.postImagesRepository.findById(post_id);

    if (postImages.image_name) {
      await this.storageProvider.delete(postImages.image_name, 'photo');
    }

    image_name.map(async (image) => {
      await this.storageProvider.save(image, 'photo');

      await this.postImagesRepository.create(user_id, post_id, image);
    });
  }
}

export { UploadPostImagesUseCase };
