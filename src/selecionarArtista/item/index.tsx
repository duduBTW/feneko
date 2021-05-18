import React from "react";
import BotaoSelecioanr from "./BotaoSelecioanr";
import ExemplosArte from "./ExemplosArte";
import { InfoArtista } from "./InfoArtista";
import { CardArtistaContainer } from "../styles";
import { ArtistaModelo } from "@/src/data";
import { useRouter } from "next/dist/client/router";

export default function CardArtista({
  index,
  setOpen,
  artista,
  select,
  checked,
}: {
  artista: ArtistaModelo;
  index: number;
  setOpen: any;
  select: boolean;
  checked: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const history = useRouter();
  const redirectArtista = () => {
    history.push(history.asPath + `/${artista.id}`);
  };

  return (
    <CardArtistaContainer>
      <InfoArtista onClick={redirectArtista} {...artista} />
      <ExemplosArte artes={artista.artes} setOpen={setOpen} index={index} />
      {select && <BotaoSelecioanr checked={checked} id={artista.id} />}
    </CardArtistaContainer>
  );
}
