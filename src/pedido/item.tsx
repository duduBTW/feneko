import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeArtist, setDesc } from "../redux/actions/orderActions";
import { RootModel } from "../redux/reducers";
import { OrderModel } from "../redux/reducers/orderReducer";
import { AddArtist } from "./body/AddArtist";
import { ArtistSelectedContainer, ItemPedidoContainer } from "./styles";

interface ItemPedidoProps {
  title: string;
  image: string;
  desc: string;
  additionalInfo?: JSX.Element;
  types: any[];
  type: string;
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
  const dispatch = useDispatch();
  const itemsSelected = otderItems.filter((item) =>
    types.map((i) => i._id).includes(item.type)
  );

  const { t, lang } = useTranslation();

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
          types.map((typeI) => {
            //Busca artitas selecionados do mesmo tipo
            const items: any[] = itemsSelected.filter(
              (item) => typeI._id === item.type
            );

            return (
              <>
                <h2>
                  {lang == "en" ? typeI.tituloEn : typeI.tituloPt}{" "}
                  {items?.length > 0 ? <small>({items.length})</small> : ""}
                </h2>
                {items.map(
                  ({ artistData, id }: { artistData: any; id: string }) => (
                    <ArtistCard
                      onRemover={() => removerArtista(id)}
                      artista={artistData}
                      key={artistData._id}
                    />
                  )
                )}
                <AddArtist
                  key={typeI._id}
                  id={typeI._id}
                  pedidoId={type}
                  type={lang == "en" ? typeI.tituloEn : typeI.tituloPt}
                />
              </>
            );
          })}

        <h2>
          {t("common:descricao")} {title}
        </h2>
        <textarea
          onChange={changeValue}
          value={descriptions[type]}
          placeholder={t("common:placeholder", { title: title })}
        />
        <div className="line"> </div>
      </div>
      <div className="mobile-header">
        <h1>{title}</h1>
        <img src={image} />
        <p>{desc}</p>
      </div>
    </ItemPedidoContainer>
  );
}

export function ItemPedidoCompact({
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
  const itemsSelected = otderItems.filter((item) =>
    types.map((i) => i._id).includes(item.type)
  );

  const { t, lang } = useTranslation();

  return (
    <div className="order-item">
      <div>
        <div className="mobile-header">
          <h2>{t("common:tipo")}</h2>
          <div className="desc">{title}</div>
        </div>
        {types &&
          types.map((typeI) => {
            console.log(`typeI`, typeI._id);
            //Busca artitas selecionados do mesmo tipo
            const items: any[] = itemsSelected.filter(
              (item) => typeI._id === item.type
            );
            if (!items) return;

            return (
              <>
                {items.length > 0 ? (
                  <div>
                    <h2>
                      {lang == "en" ? typeI.tituloEn : typeI.tituloPt}{" "}
                      {items?.length > 0 ? <span>({items.length})</span> : ""}
                    </h2>
                    <div className="desc">
                      {items.map(
                        ({
                          artistData,
                          id,
                        }: {
                          artistData: any;
                          id: string;
                        }) => (
                          // <ArtistCard
                          //   onRemover={() => removerArtista(id)}
                          //   artista={artistData}
                          //   key={artistData._id}
                          // />
                          <span>{artistData.name}</span>
                        )
                      )}
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
      </div>

      <div>
        <h2>{t("common:descricao")}</h2>
        <div className="desc">
          {descriptions[type] || t("common:naoInformada")}
        </div>
      </div>
    </div>
  );
}

export function ItemPedidoCompactString({
  title,
  image,
  desc,
  additionalInfo,
  types,
  type,
  otderItems,
  descriptions,
  lang,
  descricao,
  tipo,
  naoInformada,
}: any) {
  const itemsSelected = otderItems.filter((item: any) =>
    types.map((i: any) => i._id).includes(item.type)
  );

  return `<div className="order-item">
      <div>
        <div className="mobile-header">
          <h2>${tipo}</h2>
          <div className="desc">${title}</div>
        </div>
        ${
          types
            ? types.map((typeI: any) => {
                //Busca artitas selecionados do mesmo tipo
                const items: any[] = itemsSelected.filter(
                  (item: any) => typeI._id === item.type
                );
                if (!items) return;

                return items.length > 0
                  ? `<hr/><div>
                    <h2>
                      ${lang == "en" ? typeI.tituloEn : typeI.tituloPt}
                    </h2>
                    <div className="desc">
                      ${items.map(
                        ({ artistData, id }: { artistData: any; id: string }) =>
                          `<span>${artistData.name}</span>`
                      )}
                    </div>
                  </div>`
                  : "";
              })
            : ""
        }
      </div>

      <div>
        <h2>${descricao}</h2>
        <div className="desc">
          ${descriptions[type] || naoInformada}
        </div>
      </div>
    </div>`;
}

function ArtistCard({
  artista,
  onRemover,
}: {
  artista: any;
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
