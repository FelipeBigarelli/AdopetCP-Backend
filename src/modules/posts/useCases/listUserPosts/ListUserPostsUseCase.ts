import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class ListUserPostsUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(user_id: string): Promise<Post[]> {
    const posts = await this.postsRepository.listUserPosts(user_id);

    return posts;
  }
}

export { ListUserPostsUseCase };
