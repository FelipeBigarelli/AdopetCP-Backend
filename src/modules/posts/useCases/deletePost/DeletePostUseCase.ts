import { inject, injectable } from 'tsyringe';

import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class DeletePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}

export { DeletePostUseCase };
