import { ArtistaModelo, dataArtista, Tags } from "@/src/data";
import SelecionarArtista from "@/src/selecionarArtista";
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

export const getServerSideProps = ({ params }: Params) => {
  const { id } = params;
  const artistas = dataArtista.filter((artiItem) => artiItem.tags.includes(id));

  return {
    props: {
      artistas,
    },
  };
};

export default function SelecionarArtistaPage({
  artistas,
}: {
  artistas: ArtistaModelo[];
}) {
  return <SelecionarArtista artistas={artistas} />;
}

SelecionarArtistaPage.loc = 3;
