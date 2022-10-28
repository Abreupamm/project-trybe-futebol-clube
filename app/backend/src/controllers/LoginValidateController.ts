import { Request, Response } from 'express';
import { IUserService } from '../interfaces/services/IUserService';

export default class LoginValidateController {
  private readonly loginService: IUserService;

  constructor(loginService: IUserService) {
    this.loginService = loginService;
  }

  async valodation(req: Request, res: Response): Promise<object> {
    const { authorization } = req.headers;
    const user = await this.loginService.validateToken(req.body, authorization);
    return res.status(200).json(user);
  }
}
