import { ILogin } from '../ILogin';
import { IRole, IUser } from '../IUser';

export interface ILoginService {
  connect(user: ILogin): Promise<string>,
  validateToken(user: IUser, token: string | void): Promise<IRole>
}
