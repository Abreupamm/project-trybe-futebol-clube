import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import Users from '../database/models/UserModel';
import { IRole, IUser } from '../interfaces/IUser';
import UnauthorizedError from '../errors/UnauthorizedError';

const jwtSecretKey = process.env.JWT_SECRET;

export default class UserService {
  async connect(user: ILogin): Promise<string> {
    const isUser = await Users.findOne({ where: { email: user.email } });

    if (!isUser) {
      throw new UnauthorizedError('Incorrect email or password');
    }

    const validPassword = compareSync(user.password, isUser.password);
    if (!validPassword) {
      throw new UnauthorizedError('Incorrect email or password');
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
      throw new UnauthorizedError('Invalid token');
    }
    const user = await Users.findOne({ where: { email: userLogin.email } });
    if (user) {
      return { role: user?.role };
    }
    return { role: '' };
  };
}
