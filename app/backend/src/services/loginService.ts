import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import Users from '../database/models/UserModel';
import { IUser } from '../interfaces/IUser';

const jwtSecretKey = process.env.JWT_SECRET;

export default class LoginService {
  // constructor(readonly model = new UsersModel(connection)) {}

  async connect(user: ILogin): Promise<string> {
    const isUser = await Users.findOne({ where: { email: user.email } });

    if (!isUser) {
      return 'erro';
    }
    const token = this.generateToken(user, isUser);
    return token;
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
