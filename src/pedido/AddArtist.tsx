import React from "react";
import { motion } from "framer-motion";
import { AddArtistContainer } from "./styles";
import { useRouter } from "next/dist/client/router";

export function AddArtist() {
  const history = useRouter();
  return (
    <AddArtistContainer onClick={() => history.push("/selecionarArtista")}>
      <motion.div>Add artist</motion.div>
    </AddArtistContainer>
  );
}
