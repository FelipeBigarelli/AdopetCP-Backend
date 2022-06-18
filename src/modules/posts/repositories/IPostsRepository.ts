import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { Post } from '../infra/typeorm/entities/Post';

interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<void>;
  editPost(data: ICreatePostDTO): Promise<void>;

  findById(id: string): Promise<Post>;
  findByLastCreated(user_id: string): Promise<Post>;

  list(): Promise<Post[]>;
  listUserPosts(user_id: string): Promise<Post[]>;
  listLastPosts(): Promise<Post[]>;
  listByCategory(category_name: string): Promise<Post[]>;

  delete(id: string, user_id: string): Promise<void>;
  deleteAdmin(id: string): Promise<void>;
}

export { IPostsRepository };
