import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { DeleteUserPostController } from '@modules/posts/useCases/deleteUserPost/DeleteUserPostController';
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@modules/users/useCases/listUsers/ListUsersController';
import { ProfileUserController } from '@modules/users/useCases/profileUser/ProfileUserController';
import { UpdateUserAvatarController } from '@modules/users/useCases/updateUserAvatar/UpdateUserAvatarController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();
const deleteUserPosts = new DeleteUserPostController();

usersRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle
);

usersRoutes.post('/', createUserController.handle);

usersRoutes.delete('/post/:id', ensureAuthenticated, deleteUserPosts.handle);

usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  ensureAuthenticated,
  updateUserAvatarController.handle
);

usersRoutes.get('/profile', ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
