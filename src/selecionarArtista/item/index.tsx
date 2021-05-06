import React from "react";
import BotaoSelecioanr from "./BotaoSelecioanr";
import ExemplosArte from "./ExemplosArte";
import { InfoArtista } from "./InfoArtista";
import { CardArtistaContainer } from "../styles";

export default function CardArtista({
  index,
  setOpen,
}: {
  index: number;
  setOpen: any;
}) {
  return (
    <CardArtistaContainer>
      <InfoArtista />
      <ExemplosArte setOpen={setOpen} index={index} />
      <BotaoSelecioanr />
    </CardArtistaContainer>
  );
}
