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
    user_id,
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
      user_id,
    });

    await this.repository.save(post);
  }

  async list(): Promise<Post[]> {
    const posts = await this.repository.find();

    return posts;
  }

  async delete(id: string): Promise<void> {
    const post = await this.repository.findOne(id);

    await this.repository.delete(post.id);
  }

  async listUserPosts(user_id: string): Promise<Post[]> {
    const userPosts = await this.repository.find({ where: { user_id } });

    return userPosts;
  }
}

export { PostsRepository };
