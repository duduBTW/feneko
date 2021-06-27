import connectDB, { Feneko, FenekoArt } from "@/src/models";
import { IFenekoArte } from "@/src/models/art";
import { IFeneko } from "@/src/models/artist";
import { NextApiRequest, NextApiResponse } from "next";

async function artistItem(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const artist: IFeneko | null = await Feneko.findById(req.query.id);

      return res.status(200).send({
        artist,
        art: await FenekoArt.find({
          artist: artist?._id,
        }),
      });
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(artistItem);
