import { User } from '@modules/users/infra/typeorm/entities/User';

import { Post } from '../infra/typeorm/entities/Post';

interface IPostImagesResponseDTO {
  id?: string;
  image_name?: string;
  image_url?(): string;
  created_at?: Date;
  post_id?: string;
  user_id?: string;
  post?: Post;
  user?: User;
}

export { IPostImagesResponseDTO };
