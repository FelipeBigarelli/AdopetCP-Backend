import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class NotificatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post not found');
    }

    return post;
  }
}

export { NotificatePostUseCase };
