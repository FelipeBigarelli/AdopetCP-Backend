import { resolve } from 'path';
import { inject, injectable } from 'tsyringe';

import { Post } from '@modules/posts/infra/typeorm/entities/Post';
import { IPostsRepository } from '@modules/posts/repositories/IPostsRepository';
import { IMailProvider } from '@shared/container/providers/MailProvider/IMailProvider';
import { AppError } from '@shared/errors/AppError';

@injectable()
class NotificatePostUseCase {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider
  ) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'notificatePost.hbs'
    );

    if (!post) {
      throw new AppError('Post not found');
    }

    const variables = {
      id: post.id,
      title: post.title,
      description: post.description,
      user_id: post.user_id,
      link: `${process.env.FORGOT_MAIL_URL}`,
    };

    await this.mailProvider.sendMail(
      'felipebiga@adopetcp.com',
      'Denúncia de Postagem',
      variables,
      templatePath
    );

    return post;
  }
}

export { NotificatePostUseCase };
