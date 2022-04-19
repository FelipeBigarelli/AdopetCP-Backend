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

  async deleteAdmin(id: string): Promise<void> {
    const post = await this.repository.findOne(id);

    await this.repository.delete(post.id);
  }

  async delete(id: string, user_id: string): Promise<void> {
    const post = await this.repository.findOne({ where: { id, user_id } });

    await this.repository.delete(post.id);
  }

  async listUserPosts(user_id: string): Promise<Post[]> {
    const userPosts = await this.repository.find({ where: { user_id } });

    return userPosts;
  }

  async editPost(data: ICreatePostDTO): Promise<void> {
    const { id } = data;
    let userPost = await this.repository.findOne({ where: { id } });

    userPost = this.repository.create({
      id: userPost.id,
      ...data,
    });

    await this.repository.save(userPost);
  }

  async searchLastPosts(): Promise<Post[]> {
    const lastPosts = await this.repository
      .createQueryBuilder('posts')
      .take(10)
      .orderBy('posts.created_at', 'DESC')
      .getMany();

    return lastPosts;
  }
}

export { PostsRepository };
