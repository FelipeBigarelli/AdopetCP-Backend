import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class ListLastPostsUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.searchLastPosts();

    return posts;
  }
}

export { ListLastPostsUseCase };
