import ButtonsBottom from "@/shared/Buttons/Bottom";
import Art from "@/src/pedido/body/art";
import Design from "@/src/pedido/body/design";
import Vtuber from "@/src/pedido/body/vTuber";
import HeaderPedido from "@/src/pedido/header";
import { RootModel } from "@/src/redux/reducers";
import { OrderModel } from "@/src/redux/reducers/orderReducer";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PedidoPage() {
  const { orders } = useSelector<RootModel, OrderModel>((state) => state.order);
  const history = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (!(orders?.length > 0)) history.push("/selecionarTipo");
  }, [orders]);

  return (
    <div className="default-container">
      <HeaderPedido />
      {orders.map((orderItem) => {
        switch (orderItem) {
          case "art":
            return <Art />;
          case "design":
            return <Design />;
          case "vtuber":
            return <Vtuber />;
        }
      })}
      <ButtonsBottom
        onCancel={() => history.push("/selecionarTipo")}
        nextLabel={t("common:continuar")}
        onSubmit={() => history.push("/finalizar")}
      />
    </div>
  );
}

PedidoPage.loc = 2;
