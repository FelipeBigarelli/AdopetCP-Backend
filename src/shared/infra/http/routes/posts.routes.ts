import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';
import { DeleteAdminPostController } from '@modules/posts/useCases/deleteAdminPost/DeleteAdminPostController';
import { DeletePostImagesController } from '@modules/posts/useCases/deletePostImages/DeletePostImagesController';
import { EditPostController } from '@modules/posts/useCases/editPost/EditPostController';
import { ListAllPostsController } from '@modules/posts/useCases/listAllPosts/ListAllPostsController';
import { ListLastPostsController } from '@modules/posts/useCases/listLastPosts/ListLastPostsController';
import { ListUserPostsController } from '@modules/posts/useCases/listUserPosts/ListUserPostsController';
import { NotificatePostController } from '@modules/posts/useCases/notificatePost/NotificatePostController';
import { UploadPostImagesController } from '@modules/posts/useCases/uploadPostImages/UploadPostImagesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postsRoutes = Router();

const createPostController = new CreatePostController();
const deleteAdminPostController = new DeleteAdminPostController();
const editPostController = new EditPostController();
const listAllPostsController = new ListAllPostsController();
const listUserPostsController = new ListUserPostsController();
const listLastPostsController = new ListLastPostsController();
const uploadPostImagesController = new UploadPostImagesController();
const deletePostImagesController = new DeletePostImagesController();
const notificatePostController = new NotificatePostController();

const upload = multer(uploadConfig);

postsRoutes.get('/', listAllPostsController.handle);

postsRoutes.get(
  '/user-posts',
  ensureAuthenticated,
  listUserPostsController.handle
);

postsRoutes.get('/last', listLastPostsController.handle);

postsRoutes.put('/edit/:id', ensureAuthenticated, editPostController.handle);

postsRoutes.post('/', ensureAuthenticated, createPostController.handle);

postsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  upload.array('images'),
  uploadPostImagesController.handle
);

postsRoutes.post(
  '/send-notification/:id',
  ensureAuthenticated,
  notificatePostController.handle
);

postsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteAdminPostController.handle
);

postsRoutes.delete(
  '/:post_id/:id',
  ensureAuthenticated,
  deletePostImagesController.handle
);

export { postsRoutes };
