import { getRepository, Repository } from 'typeorm';

import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

import { Post } from '../entities/Post';

class PostsRepository implements IPostsRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = getRepository(Post);
  }

  async create({
    title,
    description,
    photo,
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    id,
  }: ICreatePostDTO): Promise<void> {
    const post = this.repository.create({
      title,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      id,
    });

    await this.repository.save(post);
  }

  async list(): Promise<Post[]> {
    const posts = await this.repository.find();

    return posts;
  }
}

export { PostsRepository };
