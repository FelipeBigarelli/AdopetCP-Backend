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

  async findById(id: string): Promise<PostImages> {
    const image = await this.repository.findOne(id);

    console.log(image, 'image');

    return image;
  }

  async delete(id: string, post_id: string, user_id: string): Promise<void> {
    const postImage = await this.repository.findOne({
      where: { id, post_id, user_id },
    });

    await this.repository.delete(postImage.id);
  }
}

export { PostImagesRepository };
