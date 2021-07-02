import Artista from "@/src/artista/artista";
import { ArtistaModelo, dataArtista } from "@/src/data";
import axios from "axios";
import { Params } from "next/dist/next-server/server/router";

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params;

  const { data: artista } = await axios.get(
    `${process.env.URL_BASE}/api/artist/` + id
  );

  console.log(`artista`, artista);

  return {
    props: {
      artista,
    },
  };
};

export default function ArtistaItemPage({
  artista,
}: {
  artista: ArtistaModelo;
}) {
  console.log(`artista`, artista);
  return <Artista artista={artista} />;
}
