import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { ListUsersController } from '../modules/users/useCases/listUsers/ListUsersController';
import { UpdateUserAvatarController } from '../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router();

const updateUserAvatarController = new UpdateUserAvatarController();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.get('/', ensureAuthenticated, listUsersController.handle);

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch('/avatar', updateUserAvatarController.handle);

export { usersRoutes };
