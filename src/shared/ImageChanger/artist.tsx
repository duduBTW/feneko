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

export default function ArtistImageChanger() {
  const { artistModal } = useSelector<RootModel, GlobalModel>(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const [artistaSelecionado, setArtistaSelecionado] =
    useState<ArtistaModelo | null>();

  const history = useRouter();
  useEffect(() => {
    console.log(
      `dataArtista.find((artist) => artist.id === artistModal?.[0]) ?? null`,
      dataArtista.find((artist) => artist.id === artistModal?.[0]) ?? null
    );
    setArtistaSelecionado(
      dataArtista.find((artist) => artist.id === artistModal?.[0]) ?? null
    );
  }, [artistModal]);

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
            {artistaSelecionado?.name}
          </h1>
        </div>
        <AiOutlineClose
          onClick={() => dispatch(setArtistModal(null))}
          className="closeI"
        />
        {artistaSelecionado ? (
          <ImageChanger
            def={artistModal?.[1] ?? 0}
            images={artistaSelecionado.artes}
          />
        ) : (
          <div></div>
        )}
      </ModalArtistContainer>
    </Modal>
  );
}
