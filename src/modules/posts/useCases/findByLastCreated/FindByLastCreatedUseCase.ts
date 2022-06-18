import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class FindByLastCreatedUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(user_id: string): Promise<Post> {
    const lastPost = await this.postsRepository.findByLastCreated(user_id);

    return lastPost;
  }
}

export { FindByLastCreatedUseCase };
