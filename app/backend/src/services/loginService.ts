import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import Users from '../database/models/UserModel';
import { IRole, IUser } from '../interfaces/IUser';
import NotauthorizedError from '../errors/NotauthorizedError';

const jwtSecretKey = process.env.JWT_SECRET;

export default class LoginService {
  async connect(user: ILogin): Promise<string> {
    const isUser = await Users.findOne({ where: { email: user.email } });

    if (!isUser) {
      throw new NotauthorizedError('Incorrect email or password');
    }

    const validPassword = await compare(user.password, isUser.password);
    if (!validPassword) {
      throw new NotauthorizedError('Incorrect email or password');
    }

    const token = this.generateToken(user, isUser);
    return token;
  }

  private generateToken = async (user: ILogin, isUser: IUser) => {
    const payload = { id: isUser.id, email: isUser.email };

    const token = sign(payload, jwtSecretKey as string);
    return token;
  };

  validateToken = async (
    userLogin: IUser,
    token: string | void,
  ): Promise<IRole> => {
    if (!token || token.length < 16) {
      throw new NotauthorizedError('Invalid token');
    }
    const user = await Users.findOne({ where: { email: userLogin.email } });
    if (user) {
      return { role: user?.role };
    }
    return { role: '' };
  };
}
