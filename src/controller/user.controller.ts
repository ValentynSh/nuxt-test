import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";
import UserModel from "../models/user.model"

const accessTokenCookieOptions = {
  // domain: 'escape-dev.netlify.app',
 
  httpOnly: true,
  maxAge: -1, // 15 mins
  path: '/',
  sameSite: "lax" as "lax",
  secure: true,//use in http, in case of use https need to set true
};
export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function findUsersHandler(
  req: Request, res: Response
) {
  const users = await UserModel.find();
  res.setHeader("x-access-token", 'newAccessToken');
  res.setHeader("x-access-token", 'newAccessToken2');
  return res.send(users);;
}
