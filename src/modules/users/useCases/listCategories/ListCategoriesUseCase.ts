import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private listCategoriesUseCase: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.listCategoriesUseCase.listCategories();

    return categories;
  }
}

export { ListCategoriesUseCase };
