import { instanceToInstance } from 'class-transformer';

import { IPostImagesResponseDTO } from '../dtos/IPostImagesResponseDTO';
import { PostImages } from '../infra/typeorm/entities/PostImages';

class PostImagesMap {
  static toDTO({
    id,
    user_id,
    post_id,
    image_name,
    image_url,
  }: PostImages): IPostImagesResponseDTO {
    const postImage = instanceToInstance({
      id,
      user_id,
      post_id,
      image_name,
      image_url,
    });
    return postImage;
  }
}

export { PostImagesMap };
