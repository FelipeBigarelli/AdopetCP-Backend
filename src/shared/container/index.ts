import { container } from 'tsyringe';

import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { PostImagesRepository } from '@modules/posts/infra/typeorm/repositories/PostImagesRepository';
import { PostsRepository } from '@modules/posts/infra/typeorm/repositories/PostsRepository';
import { IPostImagesRepository } from '@modules/posts/repositories/IPostImagesRepository';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';

import '@shared/container/providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IPostImagesRepository>(
  'PostImagesRepository',
  PostImagesRepository
);
