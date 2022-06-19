import { instanceToPlain } from 'class-transformer';

import { IPostImagesResponseDTO } from '../dtos/IPostImagesResponseDTO';
import { IPostResponseDTO } from '../dtos/IPostResponseDTO';
import { Post } from '../infra/typeorm/entities/Post';
import { PostImagesMap } from './PostImagesMap';

class ArrayPostMap {
  static toDTO({
    id,
    title,
    description,
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    category_name,
    images,
  }: Post): IPostResponseDTO[] {
    const post = instanceToPlain({
      id,
      title,
      description,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      category_name,
      images,
    });

    post.images.forEach((image: IPostImagesResponseDTO) => {
      PostImagesMap.toDTO({
        id: image.id,
        created_at: image.created_at,
        image_name: image.image_name,
        image_url: image.image_url,
        post_id: image.post_id,
        user_id: image.user_id,
        post: image.post,
        user: image.user,
      });
    });

    console.log(post, 'asdasd');

    return post;
  }
}

export { ArrayPostMap };
