import { Title } from "@/src/styles";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataArtista } from "../data";
import { setArtistModal } from "../redux/actions/globalActions";
import CardArtista from "../selecionarArtista/item";

export default function Artistas({ data }: { data: any }) {
  const checked = useState<number[]>([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const open = (id: string, index: string) => {
    dispatch(setArtistModal([id, index]));
  };

  return (
    <div className="default-container">
      <Title>{t("common:tituloArtistas")}</Title>
      {data.map((artItem: any, index: any) => (
        <CardArtista
          checked={checked}
          select={false}
          artista={artItem}
          setOpen={(i: string) => open(artItem.artist._id, i)}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
