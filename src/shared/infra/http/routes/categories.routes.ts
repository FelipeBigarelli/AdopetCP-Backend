import { Router } from 'express';

import { CreateCategoryController } from '@modules/categories/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '@modules/users/useCases/listCategories/ListCategoriesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

export { categoriesRoutes };
