import connectDB, { FenekoTag, FenekoTipoPedido } from "@/src/models";
import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import { IFenekoTag } from "@/src/models/tags";
import { NextApiRequest, NextApiResponse } from "next";

async function tipoPedido(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const tiposPedido: IFenekoTipoPedido[] = await FenekoTipoPedido.find({
        _id: {
          $in: req.query["pedido[]"] as string[],
        },
      });

      let newTiposPedido: any[] = [];
      for (let i = 0; i < tiposPedido.length; i++) {
        const {
          titleEn,
          titlePt,
          descEn,
          descPt,
          _id,
          types,
          image,
          showPrice,
          menEn,
          maxEn,
          menPt,
          maxPt,
          preco,
          value,
        } = tiposPedido[i];

        const arttypes = await FenekoTag.find({
          _id: {
            $in: types,
          },
        });

        newTiposPedido = [
          ...newTiposPedido,
          {
            titleEn,
            titlePt,
            descEn,
            descPt,
            _id,
            image,
            tags: arttypes,
            showPrice,
            menEn,
            maxEn,
            menPt,
            maxPt,
            preco,
            value,
          },
        ];
      }

      return res.status(200).send(newTiposPedido);
    } catch (error) {
      console.log(error);

      return res.status(500).send("Error");
    }
  }
}

export default connectDB(tipoPedido);
