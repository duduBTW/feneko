import connectDB, { Feneko, FenekoArt, FenekoTipoPedido } from "@/src/models";
import { IFeneko } from "@/src/models/artist";
import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import { NextApiRequest, NextApiResponse } from "next";

async function artistas(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const artistQuery: IFeneko[] = await Feneko.find();
      let artists: IFeneko[] = [];

      for (let i = 0; i < artistQuery.length; i++) {
        if (artistQuery[i].types.includes(req.query.id)) {
          artists = [...artists, artistQuery[i]];
        }
      }

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

export default connectDB(artistas);
