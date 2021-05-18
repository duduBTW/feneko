import Artista from "@/src/artista/artista";
import { ArtistaModelo, dataArtista } from "@/src/data";
import { Params } from "next/dist/next-server/server/router";

export const getStaticProps = ({ params }: Params) => {
  const { id } = params;

  const artista = dataArtista.find((artiItem) => artiItem.id.toString() === id);

  return {
    props: {
      artista,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: dataArtista.map((artItem) => ({
      params: { id: artItem.id.toString() },
    })), // See the "paths" section below
    fallback: false, // See the "fallback" section below
  };
};

export default function ArtistaItemPage({
  artista,
}: {
  artista: ArtistaModelo;
}) {
  return <Artista artista={artista} />;
}
