import { inject, injectable } from 'tsyringe';

import { PostImages } from '@modules/posts/infra/typeorm/entities/PostImages';
import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';

@injectable()
class ListPostImagesUseCase {
  constructor(
    @inject('PostImagesRepository')
    private postImagesRepository: IPostImagesRepository
  ) {}

  async execute(post_id: string): Promise<PostImages[]> {
    const postImages = await this.postImagesRepository.findAllById(post_id);

    console.log(post_id);

    return postImages;
  }
}

export { ListPostImagesUseCase };
