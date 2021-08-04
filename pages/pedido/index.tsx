import { instance } from "@/shared/api";
import ButtonsBottom from "@/shared/Buttons/Bottom";
import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import HeaderPedido from "@/src/pedido/header";
import ItemPedido from "@/src/pedido/item";
import { RootModel } from "@/src/redux/reducers";
import { OrderModel } from "@/src/redux/reducers/orderReducer";
import { CircularProgress } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PedidoPage() {
  const { orders } = useSelector<RootModel, OrderModel>((state) => state.order);
  const [tipoPedidos, setTipoPedido] = useState<IFenekoTipoPedido[] | null>(
    null
  );
  const history = useRouter();
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (!(orders?.length > 0)) history.push("/selecionarTipo");

    fetchData();
  }, [orders]);

  const fetchData = async () => {
    const { data: pedidos } = await instance.get(`/api/pedido/item`, {
      params: { pedido: orders },
    });

    setTipoPedido(pedidos);
  };

  console.log(`tipoPedidos`, tipoPedidos);

  return (
    <div className="default-container" style={{ maxWidth: 800 }}>
      <HeaderPedido />
      {tipoPedidos ? (
        tipoPedidos.map((tipoPedido) => {
          return (
            <ItemPedido
              value={tipoPedido.value}
              preco={tipoPedido.preco}
              min={lang == "en" ? tipoPedido.menEn : tipoPedido.menPt}
              max={lang == "en" ? tipoPedido.maxEn : tipoPedido.maxPt}
              showPrice={tipoPedido.showPrice}
              key={tipoPedido._id}
              image={tipoPedido.image}
              // @ts-ignore
              types={tipoPedido.tags}
              title={lang == "en" ? tipoPedido.titleEn : tipoPedido.titlePt}
              desc={lang == "en" ? tipoPedido.descEn : tipoPedido.descPt}
              type={tipoPedido._id}
            />
          );
        })
      ) : (
        <div style={{ margin: 50 }}>
          <CircularProgress />
        </div>
      )}
      <ButtonsBottom
        backLabel={t("common:voltar")}
        onCancel={() => history.push("/selecionarTipo")}
        nextLabel={t("common:continuar")}
        onSubmit={() => history.push("/finalizar")}
      />
    </div>
  );
}

PedidoPage.loc = 2;
