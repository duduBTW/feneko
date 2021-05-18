import { Title } from "pages/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataArtista } from "../data";
import { setArtistModal } from "../redux/actions/globalActions";
import CardArtista from "../selecionarArtista/item";

export default function Artistas() {
  const checked = useState<number[]>([]);
  const dispatch = useDispatch();

  const open = (id: number) => {
    dispatch(setArtistModal(id));
  };

  return (
    <div className="default-container">
      <Title>Artistas</Title>
      {dataArtista.map((artItem, index) => (
        <CardArtista
          checked={checked}
          select={false}
          artista={artItem}
          setOpen={() => open(artItem.id)}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
