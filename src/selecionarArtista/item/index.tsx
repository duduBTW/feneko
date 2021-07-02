import React from "react";
import BotaoSelecioanr from "./BotaoSelecioanr";
import ExemplosArte from "./ExemplosArte";
import { InfoArtista } from "./InfoArtista";
import { CardArtistaContainer } from "../styles";
import { ArtistaModelo } from "@/src/data";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { removeArtist } from "@/src/redux/actions/orderActions";

export default function CardArtista({
  index,
  setOpen,
  artista,
  select,
  checked,
  def,
}: {
  artista: any;
  index: number;
  setOpen: any;
  select: boolean;
  checked: [number[], React.Dispatch<React.SetStateAction<number[]>>];
  def?: any[];
}) {
  const history = useRouter();
  const [selecionado, setChecked] = select ? checked : [[], () => {}];
  const dispatch = useDispatch();
  const redirectArtista = () => {
    history.push(history.asPath + `/${artista.artist._id}`);
  };

  const removerArtista = (id: string) => {
    dispatch(removeArtist(id));
  };

  const changeCheched = () => {
    if (Boolean(selecionado.find((selec) => selec === artista.artist._id))) {
      const newValue = selecionado.filter(
        (selec) => selec !== artista.artist._id
      );
      setChecked(newValue);

      return;
    }
    setChecked((c) => [...c, artista.artist._id]);
  };

  console.log(`selecionado`, artista.artist._id);

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
          checked={Boolean(
            selecionado.find((selec) => selec === artista.artist._id)
          )}
        />
      )}
    </CardArtistaContainer>
  );
}
