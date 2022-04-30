import { inject, injectable } from 'tsyringe';

import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeletePostImagesUseCase {
  constructor(
    @inject('PostImagesRepository')
    private postImagesRepository: IPostImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(user_id: string, post_id: string, id: string): Promise<void> {
    const postImage = await this.postImagesRepository.findById(id);

    if (!postImage) {
      throw new AppError('Image does not exist');
    }

    await this.storageProvider.delete(postImage.image_name, 'photo');
    await this.postImagesRepository.delete(id, post_id, user_id);
  }
}

export { DeletePostImagesUseCase };
