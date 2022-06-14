import { NextApiResponse } from "next";
import handler, {
  NextApiRequestExtended,
} from "../../../server/configs/next-connect";
import { User } from "../../../server/entities/user";

export default handler.get(
  (req: NextApiRequestExtended, res: NextApiResponse) => {
    const user = new User();
    user.firstName = "rohit";
    user.lastName = "gupta";
    user.isActive = true;
    const userRepo = req.myDataSource.getRepository(User);
    userRepo.save(user);
    res.status(200).json({ msg: "hi there", user });
  }
);
