import { PostImages } from '../infra/typeorm/entities/PostImages';

interface IPostImagesRepository {
  create(
    user_id: string,
    post_id: string,
    image_name: string
  ): Promise<PostImages>;
}

export { IPostImagesRepository };
