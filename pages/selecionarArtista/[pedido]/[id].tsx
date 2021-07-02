import { ArtistaModelo, dataArtista, Tags } from "@/src/data";
import SelecionarArtista from "@/src/selecionarArtista";
import axios from "axios";
import { Params } from "next/dist/next-server/server/router";

// export const getStaticPaths = () => {
//   const types = [
//     "Animador Live 2D",
//     "Emotes",
//     "Arte",
//     "Modelo",
//     "Overlay",
//     "Alerta",
//   ];
//   return {
//     paths: types.map((artItem) => ({
//       params: { id: artItem },
//     })), // See the "paths" section below
//     fallback: false, // See the "fallback" section below
//   };
// };

export const getServerSideProps = async ({ params }: Params) => {
  const { id, pedido } = params;
  // const artistas = dataArtista.filter((artiItem) => artiItem.tags.includes(id));
  const { data: artistas } = await axios.get("/api/pedido/item/" + id);

  return {
    props: {
      artistas,
      pedido,
    },
  };
};

export default function SelecionarArtistaPage({
  artistas,
  pedido,
}: {
  artistas: ArtistaModelo[];
  pedido: string;
}) {
  return <SelecionarArtista pedido={pedido} artistas={artistas} />;
}

SelecionarArtistaPage.loc = 3;
