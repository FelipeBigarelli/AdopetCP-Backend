import { instanceToInstance } from 'class-transformer';

import { IPostResponseDTO } from '../dtos/IPostResponseDTO';
import { Post } from '../infra/typeorm/entities/Post';

class PostMap {
  static toDTO({
    title,
    id,
    description,
    photo,
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    photo_url,
  }: Post): IPostResponseDTO {
    const post = instanceToInstance({
      title,
      id,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      photo_url,
    });

    return post;
  }
}

export { PostMap };
