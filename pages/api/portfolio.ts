import connectDB, { FenekoArt } from "@/src/models";
import { IFenekoArte } from "@/src/models/art";
import { NextApiRequest, NextApiResponse } from "next";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const arts: IFenekoArte[] = await FenekoArt.find();

      return res.status(200).send(arts);
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(contract);
