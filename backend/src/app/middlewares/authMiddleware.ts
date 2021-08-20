import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { ITokenPayload } from "../interfaces/ITokenPayload";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "user token is required",
    });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.APP_SECRET);
    const { id } = data as ITokenPayload;

    req.userId = id;
    next();
  } catch {
    return res.sendStatus(401);
  }
}
