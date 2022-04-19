import { inject, injectable } from 'tsyringe';

import { ICreateCategoriesDTO } from '@modules/categories/dtos/ICreateCategoriesDTO';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ category_name }: ICreateCategoriesDTO): Promise<void> {
    await this.categoriesRepository.create({
      category_name,
    });
  }
}

export { CreateCategoryUseCase };
