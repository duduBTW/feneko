import React from "react";
import { motion } from "framer-motion";
import { AddArtistContainer } from "../styles";
import { useRouter } from "next/dist/client/router";
import { Tags } from "../../data";
import { GrFormAdd } from "react-icons/gr";

export function AddArtist({ type }: { type: Tags }) {
  const history = useRouter();
  return (
    <AddArtistContainer
      onClick={() => history.push(`/selecionarArtista/${type}`)}
    >
      <GrFormAdd />
      <div style={{ width: 15 }}></div>
      <motion.div>Add</motion.div>
    </AddArtistContainer>
  );
}
