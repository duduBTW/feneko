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
  artista: any;
  index: number;
  setOpen: any;
  select: boolean;
  checked: [number[], React.Dispatch<React.SetStateAction<number[]>>];
}) {
  const history = useRouter();
  const [selecionado, setChecked] = select ? checked : [false, () => {}];
  const redirectArtista = () => {
    history.push(history.asPath + `/${artista.artist._id}`);
  };

  const changeCheched = () => {
    // if (Boolean(selecionado.find((selec) => selec === artista.id))) {
    //   const newValue = selecionado.filter((selec) => selec !== artista.id);
    //   setChecked(newValue);
    //   return;
    // }
    setChecked((c) => [...c, artista.id]);
  };

  return (
    <CardArtistaContainer
      onClick={(e) => {
        e.stopPropagation();

        if (select) {
          changeCheched();
        } else {
          redirectArtista();
        }
      }}
    >
      <InfoArtista artista={artista.artist} />
      {artista.art.length > 0 ? (
        <ExemplosArte artes={artista.art} setOpen={setOpen} index={index} />
      ) : (
        <div>Not found</div>
      )}
      {select && (
        <BotaoSelecioanr
          // checked={Boolean(selecionado.find((selec) => selec === artista?.id))}
          checked={false}
        />
      )}
    </CardArtistaContainer>
  );
}
