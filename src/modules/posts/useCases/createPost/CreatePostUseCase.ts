import { inject, injectable } from 'tsyringe';

import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class CreatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute({
    title,
    description,
    photo,
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    user_id,
  }: ICreatePostDTO): Promise<void> {
    await this.postsRepository.create({
      title,
      description,
      photo,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      user_id,
    });
  }
}

export { CreatePostUseCase };
