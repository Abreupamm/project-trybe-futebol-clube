import { Request, Response } from 'express';
import { IUserService } from '../interfaces/services/IUserService';

export default class UserController {
  private readonly loginService: IUserService;

  constructor(loginService: IUserService) {
    this.loginService = loginService;
  }

  async toConnect(req: Request, res: Response) {
    try {
      const newLogin = await this.loginService.connect(req.body);
      return res.status(200).json({ token: newLogin });
    } catch (err: any) {
      return res.status(err.status).json({ message: err.message });
    }
  }

  async validation(req: Request, res: Response): Promise<object> {
    const { authorization, userId } = req.headers;

    const id = parseFloat(userId as string);

    const user = await this.loginService.getRole(id, authorization);
    return res.status(200).json(user);
  }
}
