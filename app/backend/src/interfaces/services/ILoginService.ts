import { ILogin } from '../ILogin';

export interface ILoginService {
  connect(user: ILogin): Promise<string>
}
