import { instanceToInstance } from 'class-transformer';

import { IPostResponseDTO } from '../dtos/IPostResponseDTO';
import { Post } from '../infra/typeorm/entities/Post';

class PostMap {
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
  }: Post): IPostResponseDTO {
    const post = instanceToInstance({
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
    return post;
  }
}

export { PostMap };
