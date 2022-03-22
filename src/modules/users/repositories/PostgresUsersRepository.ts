import { User } from '../model/User';
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository';

class PostgresUsersRepository implements IUsersRepository {
  findByEmail(email: string): User {
    console.log(email);
    return null;
  }
  list(): User[] {
    return null;
  }
  create({ name, email, password, avatar }: ICreateUserDTO): void {
    console.log(name, email, password, avatar);
  }
}

export { PostgresUsersRepository };
