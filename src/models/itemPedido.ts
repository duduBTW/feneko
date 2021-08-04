import { Document, Model, model, Schema } from "mongoose";
import { IFenekoTag } from "./tags";

export type IFenekoPrecoApi = {
  inicio: number;
  fim: number;
  imagem: string;
};

export type IFenekoPrecoFront = {
  [k: string]: {
    imagem: string;
  };
};
export type IFenekoPreco = IFenekoPrecoApi[] | IFenekoPrecoFront[];

/**
 * Interface to model the Feneko Tag for TypeScript.
 * @param rag:ref => IFenekoTag._id
 * @param titlePt:string
 * @param titleEn:string
 * @param descPt:string
 * @param descEn:string
 * @param image:string
 */
export interface IFenekoTipoPedido extends Document {
  _id: string;
  types: IFenekoTag["_id"][];
  name: string;
  titleEn: string;
  titlePt: string;
  descPt: string;
  descEn: string;
  image: string;

  menEn: number;
  maxEn: number;
  menPt: number;
  maxPt: number;
  showPrice: boolean;

  preco: IFenekoPreco;
  value: number[];
}

const fenekoTipoPedidoSchema: Schema = new Schema({
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: "FenekoTipoPedido",
    },
  ],
  titlePt: {
    type: String,
    required: true,
  },
  titleEn: {
    type: String,
    required: true,
  },
  descPt: {
    type: String,
    required: true,
  },
  descEn: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  showPrice: {
    type: Boolean,
    default: false,
  },
  value: [Number],
  preco: [{ inicio: Number, fim: Number, imagem: String }],
  menEn: Number,
  maxEn: Number,
  menPt: Number,
  maxPt: Number,
});

export default fenekoTipoPedidoSchema;
