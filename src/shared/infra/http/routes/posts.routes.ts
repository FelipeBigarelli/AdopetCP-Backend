import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { DeletePostController } from '@modules/posts/useCases/deletePost/DeletePostController';
import { ListAllPostsController } from '@modules/posts/useCases/listAllPosts/ListAllPostsController';
import { ListUserPostsController } from '@modules/posts/useCases/listUserPosts/ListUserPostsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postsRoutes = Router();

const createPostController = new CreatePostController();
const deletePostController = new DeletePostController();
const listAllPostsController = new ListAllPostsController();
const listUserPostsController = new ListUserPostsController();

postsRoutes.get('/posts', listAllPostsController.handle);

postsRoutes.get(
  '/user-posts',
  ensureAuthenticated,
  listUserPostsController.handle
);

postsRoutes.post('/', ensureAuthenticated, createPostController.handle);

postsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deletePostController.handle
);

export { postsRoutes };
