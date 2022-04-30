import { PostImages } from '../infra/typeorm/entities/PostImages';

interface IPostImagesRepository {
  create(
    user_id: string,
    post_id: string,
    image_name: string
  ): Promise<PostImages>;
  findById(id: string): Promise<PostImages>;
  delete(id: string, post_id: string, user_id: string): Promise<void>;
}

export { IPostImagesRepository };
