import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../database/models/User";
import { IUserDTO } from "../dtos/IUserDTO";

export class UserController {
  private userRepository = getRepository(User);

  public async create(req: Request, res: Response) {
    const isValidUser = this.validateFields(req.body);

    if (!isValidUser) {
      return res.status(400).json({
        message: "invalid fields",
      });
    }

    const isAlreadyRegistered = await this.userRepository.findOne({
      where: { email: req.body.email },
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "email already registered",
      });
    }

    const user = await this.userRepository.create(req.body);
    await this.userRepository.save(user);

    return res.json(user);
  }

  public async index(req: Request, res: Response) {
    const users = await this.userRepository.find();

    return res.json(users);
  }

  public async find(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "user id is required",
      });
    }

    const user = await this.userRepository.findOne(id);

    return res.json(user);
  }

  private validateFields(user: IUserDTO): boolean {
    if (!user.name || !user.email || !user.password) {
      return false;
    }

    return true;
  }
}
