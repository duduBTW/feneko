import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ArtistaModelo, Tags } from "../data";
import { removeArtist, setDesc } from "../redux/actions/orderActions";
import { RootModel } from "../redux/reducers";
import { OrderModel, orderType } from "../redux/reducers/orderReducer";
import { AddArtist } from "./body/AddArtist";
import { ArtistSelectedContainer, ItemPedidoContainer } from "./styles";

interface ItemPedidoProps {
  title: string;
  image: string;
  desc: string;
  additionalInfo?: JSX.Element;
  types: Tags[];
  type: orderType;
}

export default function ItemPedido({
  title,
  image,
  desc,
  additionalInfo,
  types,
  type,
}: ItemPedidoProps) {
  const { otderItems, descriptions } = useSelector<RootModel, OrderModel>(
    (state) => state.order
  );
  const isMobile = useMediaQuery({
    query: "(max-width: 780px)",
  });
  const dispatch = useDispatch();
  const itemsSelected = otderItems.filter((item) => types.includes(item.type));

  const { t } = useTranslation();

  const removerArtista = (id: string) => {
    dispatch(removeArtist(id));
  };

  const changeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDesc({ [type]: e.target.value }));
  };

  return (
    <ItemPedidoContainer>
      <div className="artist">
        {types &&
          types.map((type) => {
            //Busca artitas selecionados do mesmo tipo
            const items = itemsSelected.filter((item) => type === item.type);

            return (
              <>
                <h2>
                  {t(`common:${type}`)}{" "}
                  {items?.length > 0 ? <span>({items.length})</span> : ""}
                </h2>
                {items.map((selected) => (
                  <ArtistCard
                    onRemover={() => removerArtista(selected.id)}
                    artista={selected.artist}
                    key={selected.artist.id}
                  />
                ))}
                <AddArtist key={type} type={type} />
              </>
            );
          })}

        <h2>
          {t("common:descricao")} {title}
        </h2>
        <textarea
          onChange={changeValue}
          value={descriptions[type]}
          placeholder={t("common:placeholder", { title: type })}
        />
        <div className="line"> </div>
      </div>
      {!isMobile ? (
        <div className="mobile-header">
          <h1>{title}</h1>
          <img src={image} />
          <p>{desc}</p>
        </div>
      ) : (
        <div className="scroll">
          <div className="container">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="image">
              <div
                className="background"
                style={{ backgroundImage: `url('${image}')` }}
              ></div>
              <div className="internal"></div>
            </div>
            <motion.p>{desc}</motion.p>
          </div>
          {additionalInfo}
        </div>
      )}
    </ItemPedidoContainer>
  );
}

function ArtistCard({
  artista,
  onRemover,
}: {
  artista: ArtistaModelo;
  onRemover: () => void;
}) {
  return (
    <ArtistSelectedContainer>
      <div className="info">
        <img
          className="pfp"
          src={artista.profilePic}
          alt={`foto de perfil ${artista.name}`}
        />
        <div className="title">{artista.name}</div>
      </div>
      <div className="remov" onClick={onRemover}>
        Remover
      </div>
    </ArtistSelectedContainer>
  );
}
