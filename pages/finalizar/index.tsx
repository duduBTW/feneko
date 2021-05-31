import ButtonsBottom from "@/shared/Buttons/Bottom";
import { Tags } from "@/src/data";
import { FinalizarContainer } from "@/src/finalizar/styles";
import { artTypes } from "@/src/pedido/body/art";
import { vTuberTypes } from "@/src/pedido/body/vTuber";
import { RootModel } from "@/src/redux/reducers";
import { OrderModel, orderType } from "@/src/redux/reducers/orderReducer";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import { Title } from "@/src/styles";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Finalizar() {
  const { t } = useTranslation();

  const { orders, descriptions, otderItems } = useSelector<
    RootModel,
    OrderModel
  >((state) => state.order);
  const history = useRouter();

  useEffect(() => {
    if (!(orders?.length > 0)) history.push("/selecionarTipo");
  }, [orders]);

  const getArtists = (order: orderType) => {
    let types: Tags[] = [];
    switch (order) {
      case "art":
        types = artTypes;
        break;
      case "vtuber":
        types = vTuberTypes;
        break;
    }

    const itemsSelected = otderItems.filter((item) =>
      types.includes(item.type)
    );

    return types.map((type) => {
      const items = itemsSelected.filter((item) => type === item.type);

      if (items.length <= 0) return;

      return (
        <div>
          <h2>{type}</h2>
          <div className="desc">
            {items.map((item) => (
              <span>{item.artist.name}</span>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <FinalizarContainer className="default-container">
      <div className="finish">
        <Title>{t("common:tituloFormulario")}</Title>
        <br />
        <br />
        <form>
          <div className="input">
            <label htmlFor="name">{t("common:nome")}</label>
            <input name="name" />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input name="email" />
          </div>
          <div className="input">
            <label htmlFor="discord">Discord</label>
            <input name="discord" />
          </div>
        </form>
        <br />
        <br />
        <ButtonsBottom
          backLabel={t("common:voltar")}
          onCancel={() => history.push("/pedido")}
          nextLabel={t("common:finalizar")}
          onSubmit={() => {}}
        />
      </div>

      <div className="info">
        {/* <Title>{t("common:tituloInfoPedidos")}</Title>
          <br />
          <br /> */}
        {orders.map((order) => (
          <div className="order-item">
            <div>
              <h2>{t("common:tipo")}</h2>
              <div className="desc">{order}</div>
            </div>
            {getArtists(order)}
            <div>
              <h2>{t("common:descricao")}</h2>
              <div className="desc">
                {descriptions[order] || t("common:naoInformada")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FinalizarContainer>
  );
}

Finalizar.loc = 4;
