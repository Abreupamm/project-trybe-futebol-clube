import { Request, Response } from 'express';
import { ILoginService } from '../interfaces/services/ILoginService';

export default class LoginValidateController {
  private readonly loginService: ILoginService;

  constructor(loginService: ILoginService) {
    this.loginService = loginService;
  }

  async valodation(req: Request, res: Response): Promise<object> {
    const { authorization } = req.headers;
    const user = await this.loginService.validateToken(req.body, authorization);
    return res.status(200).json(user);
  }
}
