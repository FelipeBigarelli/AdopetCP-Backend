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

  async findById(post_id: string): Promise<PostImages> {
    const post = await this.repository.findOne(post_id);

    return post;
  }

  async findAllById(post_id: string): Promise<PostImages[]> {
    const postImages = await this.repository.find({
      where: {
        post_id,
      },
    });

    return postImages;
  }
}

export { PostImagesRepository };