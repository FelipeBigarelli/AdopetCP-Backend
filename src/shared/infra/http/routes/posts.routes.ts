import { Router } from 'express';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { DeleteAdminPostController } from '@modules/posts/useCases/deleteAdminPost/DeleteAdminPostController';
import { EditPostController } from '@modules/posts/useCases/editPost/EditPostController';
import { ListAllPostsController } from '@modules/posts/useCases/listAllPosts/ListAllPostsController';
import { ListLastPostsController } from '@modules/posts/useCases/listLastPosts/ListLastPostsController';
import { ListUserPostsController } from '@modules/posts/useCases/listUserPosts/ListUserPostsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postsRoutes = Router();

const createPostController = new CreatePostController();
const deleteAdminPostController = new DeleteAdminPostController();
const editPostController = new EditPostController();
const listAllPostsController = new ListAllPostsController();
const listUserPostsController = new ListUserPostsController();
const listLastPostsController = new ListLastPostsController();

postsRoutes.get('/', listAllPostsController.handle);

postsRoutes.get(
  '/user-posts',
  ensureAuthenticated,
  listUserPostsController.handle
);

postsRoutes.get('/last', listLastPostsController.handle);

postsRoutes.put('/edit/:id', ensureAuthenticated, editPostController.handle);

postsRoutes.post('/', ensureAuthenticated, createPostController.handle);

postsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteAdminPostController.handle
);

export { postsRoutes };
