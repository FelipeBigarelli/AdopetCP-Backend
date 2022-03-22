import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { createUserController } from '../modules/users/useCases/createUser';
import { importUserAvatarController } from '../modules/users/useCases/importUserAvatar';
import { listUsersController } from '../modules/users/useCases/listUsers';

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
});

usersRoutes.patch('/avatar', upload.single('avatar'), (request, response) => {
  console.log(request.file);
  return importUserAvatarController.handle(request, response);
});

export { usersRoutes };
