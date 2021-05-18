import { ArtistaModelo, dataArtista } from "@/src/data";
import { setArtistModal } from "@/src/redux/actions/globalActions";
import { RootModel } from "@/src/redux/reducers";
import { GlobalModel } from "@/src/redux/reducers/globalReducers";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageChanger from ".";
import { Modal } from "../Modal";

export default function ArtistImageChanger() {
  const { artistModal } = useSelector<RootModel, GlobalModel>(
    (state) => state.global
  );
  const dispatch = useDispatch();
  const [artistaSelecionado, setArtistaSelecionado] =
    useState<ArtistaModelo | null>();

  useEffect(() => {
    setArtistaSelecionado(
      dataArtista.find((artist) => artist.id === artistModal) || null
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
      <div className="imageModal">
        {artistaSelecionado ? (
          <ImageChanger images={artistaSelecionado.artes} />
        ) : (
          <div></div>
        )}
      </div>
    </Modal>
  );
}
