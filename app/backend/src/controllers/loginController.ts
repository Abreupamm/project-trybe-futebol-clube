import { Request, Response } from 'express';
import { ILoginService } from '../interfaces/services/ILoginService';

export default class LoginController {
  private readonly loginService: ILoginService;

  constructor(loginService: ILoginService) {
    this.loginService = loginService;
  }

  async toConnect(req: Request, res: Response): Promise<object> {
    const newLogin = await this.loginService.connect(req.body);
    return res.status(200).json({ token: newLogin });
  }
}
