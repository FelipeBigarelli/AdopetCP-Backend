import { Router } from 'express';
import multer from 'multer';

import { CreatePostController } from '@modules/posts/useCases/createPost/CreatePostController';

import uploadConfig from '../../../../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postsRoutes = Router();

const uploadPhoto = multer(uploadConfig);

const createPostController = new CreatePostController();

postsRoutes.post('/new-post', ensureAuthenticated, createPostController.handle);

export { postsRoutes };
