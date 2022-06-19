import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { PostImagesMap } from '@modules/posts/mapper/PostImagesMap';
import { PostMap } from '@modules/posts/mapper/PostMap';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';

@injectable()
class ListPostByIdUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository
  ) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    return PostMap.toDTO(post);
  }
}

export { ListPostByIdUseCase };
