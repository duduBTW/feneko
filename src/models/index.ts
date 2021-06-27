import mongoose, { model, Model } from "mongoose";
import fenekoArtSchema, { IFenekoArte } from "./art";
import fenekoSchema, { IFeneko } from "./artist";
import fenekoTipoPedidoSchema, { IFenekoTipoPedido } from "./itemPedido";
import fenekoTagSchema, { IFenekoTag } from "./tags";

//@ts-ignore
mongoose.models = {};

export const FenekoTag: Model<IFenekoTag> = model("FenekoTag", fenekoTagSchema);
export const FenekoArt: Model<IFenekoArte> = model(
  "FenekoArt",
  fenekoArtSchema
);
export const FenekoTipoPedido: Model<IFenekoTipoPedido> = model(
  "FenekoTipoPedido",
  fenekoTipoPedidoSchema
);
export const Feneko: Model<IFeneko> = model("Feneko", fenekoSchema);

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect("", {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
