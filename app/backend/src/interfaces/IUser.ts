import { ILogin } from './ILogin';

interface IUser extends ILogin {
  id: number;
  username: string;
}

interface IRole {
  role: string;
}

export { IUser, IRole };
