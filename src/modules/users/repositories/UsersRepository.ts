import { User } from '../model/User';
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email, password, avatar }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      avatar,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}

export { UsersRepository };
