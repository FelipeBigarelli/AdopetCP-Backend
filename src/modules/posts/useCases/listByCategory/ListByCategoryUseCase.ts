import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class ListByCategoryUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(category_name: string): Promise<Post[]> {
    const posts = await this.postsRepository.listByCategory(category_name);

    return posts;
  }
}

export { ListByCategoryUseCase };
