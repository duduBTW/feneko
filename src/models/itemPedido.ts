import { Document, Model, model, Schema } from "mongoose";
import { IFenekoTag } from "./tags";

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
});

export default fenekoTipoPedidoSchema;
