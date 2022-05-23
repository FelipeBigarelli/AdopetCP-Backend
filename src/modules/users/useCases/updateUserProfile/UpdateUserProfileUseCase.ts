import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

@injectable()
class UpdateUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id, name, email }: IRequest) {
    const findUser = await this.usersRepository.findById(id);

    if (!findUser) {
      throw new AppError('User not found', 401);
    }

    const updatedUser: ICreateUserDTO = {
      id: findUser.id,
      name,
      email,
      avatar: findUser.avatar,
      password: findUser.password,
    };

    await this.usersRepository.create(updatedUser);
  }
}

export { UpdateUserProfileUseCase };
