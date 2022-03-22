import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email, password, avatar }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    this.usersRepository.create({ name, email, password, avatar });
  }
}

export { CreateUserUseCase };
