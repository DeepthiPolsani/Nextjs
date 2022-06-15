import { User } from "../entities/user";
import getRepo from "../utils/get-repository";

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const userRepo = await getRepo("User");
  const user = (await userRepo.findOne({
    where: {
      username,
    },
  })) as User;

  if (!user) {
    throw new Error(`no user with ${username} exists`);
  }

  if (user?.password !== password) {
    throw new Error("invalid credentials");
  }

  return user;
};

export default { login };
