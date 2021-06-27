import connectDB, { Feneko, FenekoArt } from "@/src/models";
import { IFeneko } from "@/src/models/artist";
import { NextApiRequest, NextApiResponse } from "next";

async function contract(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const artists: IFeneko[] = await Feneko.find();

      let artistNew: any[] = [];
      for (let i = 0; i < artists.length; i++) {
        const artist = artists[i];

        artistNew = [
          ...artistNew,
          {
            artist,
            art: await FenekoArt.find({
              artist: artist._id,
            }),
          },
        ];
      }

      return res.status(200).send(artistNew);
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(contract);
