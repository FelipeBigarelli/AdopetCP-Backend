import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';
import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
  create(data: ICreateCategoriesDTO): Promise<void>;
  findCategoryByName(category_name: string): Promise<Category>;
}

export { ICategoriesRepository };
