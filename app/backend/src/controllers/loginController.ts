import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}
  async toConnect(req: Request, res: Response): Promise<object> {
    const newLogin = await this.loginService.connect(req.body);
    return res.status(200).json({ token: newLogin });
  }
}
