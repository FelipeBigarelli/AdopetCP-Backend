import { getRepository, Repository } from 'typeorm';

import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { PostMap } from '@modules/posts/mapper/PostMap';
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
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    id,
    user_id,
    category_name,
  }: ICreatePostDTO): Promise<void> {
    const post = this.repository.create({
      title,
      description,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      id,
      user_id,
      category_name,
    });

    await this.repository.save(post);
  }

  async list(): Promise<Post[]> {
    const posts = await this.repository.find({ order: { created_at: 'DESC' } });

    const postMap = posts.map((post) => PostMap.toDTO(post));

    return postMap;
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

    const userPostMap = userPosts.map((post) => PostMap.toDTO(post));

    return userPostMap;
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

  async listLastPosts(): Promise<Post[]> {
    const lastPosts = await this.repository
      .createQueryBuilder('posts')
      .take(10)
      .orderBy('posts.created_at', 'DESC')
      .getMany();

    return lastPosts;
  }

  async findById(id: string): Promise<Post> {
    const post = await this.repository.findOne(id);

    return post;
  }

  async listByCategory(category_name: string): Promise<Post[]> {
    const queryBuilder = await this.repository.find({
      where: { category_name },
    });

    return queryBuilder;
  }

  async findByLastCreated(user_id: string): Promise<Post> {
    const lastCreated = await this.repository
      .createQueryBuilder('posts')
      .where('posts.user_id = :user_id', { user_id })
      .orderBy('posts.created_at', 'DESC')
      .getOne();

    return lastCreated;
  }
}

export { PostsRepository };
