import Artista from "@/src/artista";
import axios from "axios";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:3000/api/artist");

  return {
    props: {
      data: data,
    },
  };
};

export default function ArtistaPage({ data }: { data: any }) {
  return <Artista data={data} />;
}
