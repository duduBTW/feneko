import { ArtistaModelo, dataArtista } from "@/src/data";
import { setArtistModal } from "@/src/redux/actions/globalActions";
import { RootModel } from "@/src/redux/reducers";
import { GlobalModel } from "@/src/redux/reducers/globalReducers";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageChanger from ".";
import { Modal } from "../Modal";
import { AiOutlineClose } from "react-icons/ai";
import { ModalArtistContainer } from "./styles";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export default function ArtistImageChanger() {
  const { artistModal } = useSelector<RootModel, GlobalModel>(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const [def, setDef] = useState(0);
  const [artistaSelecionado, setArtistaSelecionado] = useState<any | null>();

  const history = useRouter();
  useEffect(() => {
    // setArtistaSelecionado(
    //   dataArtista.find((artist) => artist.id === artistModal?.[0]) ?? null
    // );
    if (artistModal?.[0]) {
      getArtist(artistModal?.[0]);
    } else {
      setArtistaSelecionado(null);
    }
  }, [artistModal]);

  useEffect(() => {
    if (artistaSelecionado) {
      console.log(
        "def: ",
        artistaSelecionado.art
          .map((item: any) => item._id)
          .indexOf(artistModal?.[1] ?? "")
      );
    }
  }, [artistaSelecionado]);

  const getArtist = async (id: String) => {
    const { data: artistas } = await axios.get(
      `${process.env.URL_BASE}/api/artist/` + artistModal?.[0]
    );

    setArtistaSelecionado(artistas);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      dispatch(setArtistModal(null));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <Modal open={Boolean(artistaSelecionado)}>
      <ModalArtistContainer>
        <div className="header">
          <h1
            onClick={() => {
              dispatch(setArtistModal(null));
              history.push(`/artista/${artistaSelecionado?.id}`);
            }}
          >
            {artistaSelecionado?.artist?.name}
          </h1>
        </div>
        <AiOutlineClose
          onClick={() => dispatch(setArtistModal(null))}
          className="closeI"
        />
        {artistaSelecionado ? (
          <ImageChanger
            def={artistModal?.[1]}
            images={artistaSelecionado.art}
          />
        ) : (
          <div></div>
        )}
      </ModalArtistContainer>
    </Modal>
  );
}
