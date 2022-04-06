import { ICreatePostDTO } from '../dtos/ICreatePostDTO';
import { Post } from '../infra/typeorm/entities/Post';

interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<void>;
  list(): Promise<Post[]>;
}

export { IPostsRepository };
