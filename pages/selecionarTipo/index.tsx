import { instance } from "@/shared/api";
import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import SelecionarTipo from "@/src/selecionarTipo";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: pedidos } = await instance.get(`/api/pedido`);
  console.log(pedidos);

  return {
    props: {
      pedidos,
    },
  };
};

export default function SelecionarTipoPage({
  pedidos,
}: {
  pedidos: IFenekoTipoPedido[];
}) {
  return <SelecionarTipo pedidos={pedidos} />;
}

SelecionarTipoPage.loc = 1;
