import { getRepository } from "typeorm";
import { User } from "../database/models/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class AuthController {
  private userRepository = getRepository(User);

  public async authenticate(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "invalid fields",
      });
    }

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "invalid password",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: "1d",
    });

    delete user.password;

    return res.json({
      user,
      token,
    });
  }
}
