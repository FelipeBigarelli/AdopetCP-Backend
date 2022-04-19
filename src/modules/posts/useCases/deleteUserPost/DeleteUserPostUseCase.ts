import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class DeleteUserPostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(id: string, user_id: string): Promise<void> {
    await this.postsRepository.delete(id, user_id);
  }
}

export { DeleteUserPostUseCase };
