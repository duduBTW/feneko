import { instance } from "@/shared/api";
import Artista from "@/src/artista";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await instance.get(`/api/artist`);

  return {
    props: {
      data: data,
    },
  };
};

export default function ArtistaPage({ data }: { data: any }) {
  return <Artista data={data} />;
}
