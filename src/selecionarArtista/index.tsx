import ButtonsBottom from "@/shared/Buttons/Bottom";
import { AnimatePresence, motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import { Title } from "@/src/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ArtistaModelo, Tags } from "../data";
import { setArtistModal } from "../redux/actions/globalActions";
import { addArtist } from "../redux/actions/orderActions";
import { RootModel } from "../redux/reducers";
import { OrderItemModel } from "../redux/reducers/orderReducer";
import CardArtista from "./item";
import { SelecionarArtistaContainer } from "./styles";

export default function SelecionarArtista({
  artistas,
  pedido,
}: {
  artistas: any[];
  pedido: string;
}) {
  // const [open, setOpen] = useState(false);
  const history = useRouter();
  const dispatch = useDispatch();
  const checkedItem = useState<number[]>([]);
  const [artistasNew, setArtistasNew] = useState(artistas);
  const otderItems = useSelector<RootModel, OrderItemModel[]>(
    (state) => state.order.otderItems
  );

  const { t } = useTranslation();

  const setOpen = (id: string, index: string) =>
    dispatch(setArtistModal([id, index]));

  const send = () => {
    dispatch(
      addArtist(
        checkedItem[0].map((item) => {
          const artistData = artistas.find(
            (artista) => artista.artist._id === item
          ).artist;
          return {
            pedido,
            artist: artistData._id,
            type: history.query.id?.toString() as Tags,
            id: uuidv4(),
            artistData,
          };
        })
      )
    );

    history.push("/pedido");
  };

  useEffect(() => {
    const itemsSelected = otderItems.filter(
      (item) => item.type === history.query.id?.toString()
    );
    let selected: any[] = [];
    artistas.map((artista) =>
      itemsSelected.some(({ artist }) => artista.artist._id == artist)
        ? null
        : (selected = [...selected, artista])
    );

    console.log(`selected`, selected);
    console.log(`selected`, artistas);

    setArtistasNew(selected);
    // checkedItem[1](selected);
  }, []);

  return (
    <SelecionarArtistaContainer className="default-container">
      <Title
        style={{
          textAlign: "end",
          position: "sticky",
          top: 60,
          zIndex: 50,
          fontSize: 32,
          padding: 15,
        }}
      >
        <small
          style={{ display: "flex", alignItems: "center", marginRight: 12 }}
        >
          (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              key={checkedItem[0].length}
            >
              {checkedItem[0].length}
            </motion.div>
          </AnimatePresence>
          )
        </small>{" "}
        {t("common:tituloArtistas")}
      </Title>
      {artistasNew && artistasNew.length > 0 ? (
        artistasNew.map((artist, index) => (
          <CardArtista
            checked={checkedItem}
            select
            artista={artist}
            setOpen={(i: string) => setOpen(artist.artist._id, i)}
            index={index}
            key={index}
          />
        ))
      ) : (
        <div
          style={{
            height: "70vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>{t("common:vazio")}</h3>
        </div>
      )}
      <ButtonsBottom onCancel={() => history.push("/pedido")} onSubmit={send} />
    </SelecionarArtistaContainer>
  );
}
