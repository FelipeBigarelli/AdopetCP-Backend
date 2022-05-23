import { getRepository, Repository } from 'typeorm';

import { ICreateCategoriesDTO } from '@modules/categories/dtos/ICreateCategoriesDTO';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';

import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ category_name }: ICreateCategoriesDTO): Promise<void> {
    const category = this.repository.create({
      category_name,
    });

    await this.repository.save(category);
  }

  async findCategoryByName(category_name: string): Promise<Category> {
    const findCategory = await this.repository.findOne({
      where: { category_name },
    });

    return findCategory;
  }

  async listCategories(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }
}

export { CategoriesRepository };
