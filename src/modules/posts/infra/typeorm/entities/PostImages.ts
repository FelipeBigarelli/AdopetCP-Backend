import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
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

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { PostImages };
