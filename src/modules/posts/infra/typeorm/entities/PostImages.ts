import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from '@modules/users/infra/typeorm/entities/User';

import { Post } from './Post';

@Entity('post_images')
class PostImages {
  @PrimaryColumn()
  id: string;

  @Column()
  image_name: string;

  @Column()
  post_id: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Post, (post) => post.images)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Expose({ name: 'image_url' })
  image_url(): string {
    switch (process.env.disk) {
      case 'local':
        return `${process.env.APP_API_URL}/photo/${this.image_name}`;
      case 's3':
        return `${process.env.AWS_BUCKET_URL}/photo/${this.image_name}`;
      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { PostImages };
