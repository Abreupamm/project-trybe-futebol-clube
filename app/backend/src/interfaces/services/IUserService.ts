import { ILogin } from '../ILogin';
import { IRole } from '../IUser';

export interface IUserService {
  connect(user: ILogin): Promise<string>,
  getRole(id: number, token: string | void): Promise<IRole>
}
