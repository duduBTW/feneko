import connectDB, { Feneko, FenekoArt, FenekoTag } from "@/src/models";
import { IFenekoArte } from "@/src/models/art";
import { IFeneko } from "@/src/models/artist";
import { IFenekoTag } from "@/src/models/tags";
import { NextApiRequest, NextApiResponse } from "next";

async function artistItem(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      let artist: IFeneko | null = await Feneko.findById(req.query.id);

      if (!artist) {
        return res.status(404).send("Not found");
      }

      return res.status(200).send({
        artist,
        art: await FenekoArt.find({
          artist: artist?._id,
        }),
        typeData: await FenekoTag.find({
          _id: artist.types,
        }),
      });
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(artistItem);
