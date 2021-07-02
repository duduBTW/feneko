import { instance } from "@/shared/api";
import Artista from "@/src/artista/artista";
import { ArtistaModelo } from "@/src/data";
import { Params } from "next/dist/next-server/server/router";

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params;

  const { data: artista } = await instance.get(`/api/artist/` + id);

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
