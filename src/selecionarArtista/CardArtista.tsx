import React from "react";
import BotaoSelecioanr from "./BotaoSelecioanr";
import ExemplosArte from "./ExemplosArte";
import { InfoArtista } from "./InfoArtista";
import { CardArtistaContainer } from "./styles";

export default function CardArtista({ index }: { index: number }) {
  return (
    <CardArtistaContainer>
      <InfoArtista />
      <ExemplosArte index={index} />
      <BotaoSelecioanr />
    </CardArtistaContainer>
  );
}
