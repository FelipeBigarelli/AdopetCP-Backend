import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import { User } from '@modules/users/infra/typeorm/entities/User';

import { PostImages } from './PostImages';

@Entity('posts')
class Post {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  phone_number: number;

  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  house_number: string;

  @CreateDateColumn()
  created_at?: Date;

  @Column()
  user_id?: string;

  @Column()
  category_name: string;

  @OneToMany(() => PostImages, (postImages) => postImages.post, { eager: true })
  @Expose({ name: 'image_url' })
  images: PostImages[];

  @OneToOne(() => Category)
  @JoinColumn({ name: 'category_name' })
  category?: Category;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
