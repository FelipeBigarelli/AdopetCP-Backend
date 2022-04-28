import { getRepository, Repository } from 'typeorm';

import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';

import { PostImages } from '../entities/PostImages';

class PostImagesRepository implements IPostImagesRepository {
  private repository: Repository<PostImages>;

  constructor() {
    this.repository = getRepository(PostImages);
  }

  async create(
    user_id: string,
    post_id: string,
    image_name: string
  ): Promise<PostImages> {
    const postImage = this.repository.create({
      user_id,
      post_id,
      image_name,
    });

    await this.repository.save(postImage);

    return postImage;
  }
}

export { PostImagesRepository };
