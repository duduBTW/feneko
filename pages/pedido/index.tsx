import Art from "@/src/pedido/art";
import Design from "@/src/pedido/design";
import Vtuber from "@/src/pedido/vTuber";
import { RootModel } from "@/src/redux/reducers";
import { OrderModel } from "@/src/redux/reducers/orderReducer";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PedidoPage() {
  const order = useSelector<RootModel, OrderModel>((state) => state.order);
  const history = useRouter();

  useEffect(() => {
    if (!(order?.orders?.length > 0)) history.push("/selecionarTipo");
  }, [order.orders]);

  return (
    <div className="default-container">
      {order.orders.map((orderItem) => {
        switch (orderItem) {
          case "art":
            return <Art />;
          case "design":
            return <Design />;
          case "vtuber":
            return <Vtuber />;
        }
      })}
    </div>
  );
}

PedidoPage.loc = 2;
