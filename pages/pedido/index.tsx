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
    <div>
      {order.orders.map((orderItem) => (
        <div>{orderItem}</div>
      ))}
    </div>
  );
}
