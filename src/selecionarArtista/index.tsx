import ButtonsBottom from "@/shared/Buttons/Bottom";
import { useRouter } from "next/dist/client/router";
import { Title } from "pages/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ArtistaModelo, Tags } from "../data";
import { setArtistModal } from "../redux/actions/globalActions";
import { addArtist } from "../redux/actions/orderActions";
import CardArtista from "./item";
import { SelecionarArtistaContainer } from "./styles";

export default function SelecionarArtista({
  artistas,
}: {
  artistas: ArtistaModelo[];
}) {
  // const [open, setOpen] = useState(false);
  const history = useRouter();
  const dispatch = useDispatch();
  const checkedItem = useState<number[]>([]);

  const setOpen = (id: number) => dispatch(setArtistModal(id));

  const send = () => {
    dispatch(
      addArtist(
        checkedItem[0].map((item) => ({
          artist: artistas.find(
            (artista) => artista.id === item
          ) as ArtistaModelo,
          type: history.query.id?.toString() as Tags,
          id: uuidv4(),
        }))
      )
    );

    history.push("/pedido");
  };

  return (
    <SelecionarArtistaContainer className="default-container">
      <Title style={{ textAlign: "end" }}>Artistas</Title>
      {artistas.map((artist, index) => (
        <CardArtista
          checked={checkedItem}
          select
          artista={artist}
          setOpen={() => setOpen(artist.id)}
          index={index}
          key={index}
        />
      ))}
      <ButtonsBottom onCancel={() => history.push("/pedido")} onSubmit={send} />
    </SelecionarArtistaContainer>
  );
}
