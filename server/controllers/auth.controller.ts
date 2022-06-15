import { NextApiRequest, NextApiResponse } from "next";
import authService from "../services/auth.service";
// import { User } from "../entities/user";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  if (!username || !password) {
    throw new Error("please provide username and password both");
  }

  const user = await authService.login({ username, password });
  res.status(200).json({ user });
};

export default { login };
