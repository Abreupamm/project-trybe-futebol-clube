import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import Users from '../database/models/UserModel';
import { IUser } from '../interfaces/IUser';

const jwtSecretKey = process.env.JWT_SECRET;

export default class LoginService {
  // constructor(readonly model = new UsersModel(connection)) {}

  async connect(user: ILogin): Promise<object> {
    const isUser = await Users.findOne({
      attributes: ['id', 'role', 'email', 'password'],
      where: { email: user.email },
    });

    if (!isUser) {
      return { status: 404, messagem: 'Incorrect email or password' };
    }
    return { status: 200, token: this.generateToken(user, isUser) };
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
