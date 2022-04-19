import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { Post } from '../infra/typeorm/entities/Post';

interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<void>;
  list(): Promise<Post[]>;
  searchLastPosts(): Promise<Post[]>;
  listUserPosts(user_id: string): Promise<Post[]>;
  delete(id: string, user_id: string): Promise<void>;
  deleteAdmin(id: string): Promise<void>;
  editPost(data: ICreatePostDTO): Promise<void>;
}

export { IPostsRepository };