import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { passwordRoutes } from './password.routes';
import { postsRoutes } from './posts.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/users', usersRoutes);
router.use('/password', passwordRoutes);
router.use('/posts', postsRoutes);
router.use('/categories', categoriesRoutes);

export { router };
