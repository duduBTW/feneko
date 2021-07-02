import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import SelecionarTipo from "@/src/selecionarTipo";
import axios from "axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: pedidos } = await axios.get(
    `${process.env.URL_BASE}/api/pedido`
  );
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
