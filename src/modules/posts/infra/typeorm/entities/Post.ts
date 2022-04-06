import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('posts')
class Post {
  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column()
  phone_number: number;

  @Column()
  cep: number;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  house_number: string;

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: 'photo_url' })
  photo_url(): string {
    switch (process.env.disk) {
      case 'local':
        return `${process.env.APP_API_URL}/photo/${this.photo}`;
      case 's3':
        return `${process.env.AWS_BUCKET_URL}/photo/${this.photo}`;
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

export { Post };
