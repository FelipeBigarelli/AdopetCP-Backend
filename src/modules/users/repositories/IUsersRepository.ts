import { User } from '../model/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface IUsersRepository {
  findByEmail(email: string): User;
  list(): User[];
  create({ name, email, password, avatar }: ICreateUserDTO): void;
}

export { IUsersRepository, ICreateUserDTO };
