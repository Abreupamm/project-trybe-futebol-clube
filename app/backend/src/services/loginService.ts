import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import Users from '../database/models/UserModel';
import { IUser } from '../interfaces/IUser';
import NotauthorizedError from '../errors/NotauthorizedError';

const jwtSecretKey = process.env.JWT_SECRET;

export default class LoginService {
  async connect(user: ILogin): Promise<string> {
    const isUser = await Users.findOne({ where: { email: user.email } });

    if (isUser) {
      const token = this.generateToken(user, isUser);
      return token;
    }
    throw new NotauthorizedError('Incorrect email or password');
  }

  private generateToken = async (user: ILogin, isUser: IUser) => {
    const payload = { id: isUser.id, email: isUser.email, role: isUser.role };
    const validPassword = await compare(user.password, isUser.password);

    if (validPassword) {
      const token = sign(payload, jwtSecretKey as string);
      return token;
    }
    return 'Incorrect email or password';
  };
}
