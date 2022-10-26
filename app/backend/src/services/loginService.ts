// import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Users from '../database/models/UserModel';
import { IUser } from '../interfaces/userInterface';

const jwtSecretKey = process.env.JWT_SECRET;

export default class LoginService {
  async connect(user: IUser): Promise<object> {
    const isUser = await Users.findOne({
      attributes: ['id', 'role', 'email', 'password'],
      where: { email: user.email, password: user.password },
    });

    if (!isUser) {
      return { status: 404, messagem: 'Incorrect email or password' };
    }
    return { status: 200, token: this.generateToken(user, isUser) };
  }

  private generateToken = async (user: IUser, isUser: IUser) => {
    const payload = { id: isUser.id, email: isUser.email, role: isUser.role };
    // const validPassword = await compare(user.password, isUser.password);

    const token = sign(payload, jwtSecretKey as string);
    return token;
  };
}
