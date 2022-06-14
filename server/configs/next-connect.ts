import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { DataSource } from "typeorm";
import connectDb from "./connect-db";

export interface NextApiRequestExtended extends NextApiRequest {
  myDataSource: DataSource;
}

const handler = nextConnect().use(
  async (req: NextApiRequestExtended, res: NextApiResponse, _next) => {
    req.myDataSource = await connectDb();
    _next();
  }
);

export default handler;
