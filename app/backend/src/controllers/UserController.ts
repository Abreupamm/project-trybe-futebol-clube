import { Request, Response } from 'express';
import { IUserService } from '../interfaces/services/IUserService';

export default class UserController {
  private readonly loginService: IUserService;

  constructor(loginService: IUserService) {
    this.loginService = loginService;
  }

  async toConnect(req: Request, res: Response) {
    const newLogin = await this.loginService.connect(req.body);
    return res.status(200).json({ token: newLogin });
  }
}
