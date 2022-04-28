import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { ICreatePostDTO } from '@modules/posts/dtos/ICreatePostDTO';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({
    title,
    description,
    phone_number,
    cep,
    city,
    district,
    street,
    house_number,
    category_name,
    user_id,
  }: ICreatePostDTO): Promise<void> {
    const findCategory = await this.categoriesRepository.findCategoryByName(
      category_name
    );

    if (!findCategory) {
      throw new AppError('Category does not exists');
    }

    await this.postsRepository.create({
      title,
      description,
      phone_number,
      cep,
      city,
      district,
      street,
      house_number,
      category_name: findCategory.category_name,
      user_id,
    });
  }
}

export { CreatePostUseCase };
