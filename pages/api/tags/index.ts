import connectDB, { FenekoTag } from "@/src/models";
import { IFenekoTag } from "@/src/models/tags";
import { NextApiRequest, NextApiResponse } from "next";

async function tags(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const tagresult: IFenekoTag[] = await FenekoTag.find({
        _id: {
          $in: req.query["tags[]"] as string[],
        },
      });

      return res.status(200).send(tagresult);
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(tags);
