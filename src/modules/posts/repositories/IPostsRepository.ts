import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { Post } from '../infra/typeorm/entities/Post';

interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<void>;
  list(): Promise<Post[]>;
  listUserPosts(user_id: string): Promise<Post[]>;
  delete(id: string): Promise<void>;
}

export { IPostsRepository };
