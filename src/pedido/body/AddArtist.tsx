import React from "react";
import { motion, Variants } from "framer-motion";
import { AddArtistContainer } from "../styles";
import { useRouter } from "next/dist/client/router";
import { Tags } from "../../data";
import { GrFormAdd } from "react-icons/gr";
import useTranslation from "next-translate/useTranslation";

const add: Variants = {
  hover: { x: -200 },
};

const desc: Variants = {
  hover: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  rest: { y: "-200%", opacity: 0 },
};

export function AddArtist({ type }: { type: Tags }) {
  const history = useRouter();
  const { t } = useTranslation();

  return (
    <AddArtistContainer
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={() => history.push(`/selecionarArtista/${type}`)}
    >
      <motion.div style={{ display: "flex" }} variants={add}>
        <GrFormAdd />
        <div style={{ width: 15 }}></div>
        <motion.div>{t("common:adicionar")}</motion.div>
      </motion.div>
      <motion.p variants={desc}>
        {t("common:adicionarDescricao", { type })}
      </motion.p>
    </AddArtistContainer>
  );
}
