import { IFenekoTipoPedido } from "@/src/models/itemPedido";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { TipoModel } from "..";
import { CardTipoContainer } from "./styles";

interface CardTipoProps {
  data: IFenekoTipoPedido;
  onClick: (data: string) => void;
  index: number;
  selected: boolean;
}

const itemVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "tween",
      ease: "backOut",
    },
  },
};

const titleVariants: Variants = {
  // rest: (selected) => ({ y: selected ? -80 : 0 }),
  hover: {
    y: -280,
  },
};

const descVariants: Variants = {
  rest: { x: "-100%" },
  hover: {
    x: "0%",
    transition: {
      type: "spring",
      delay: 0.15,
      bounce: 0.4,
    },
  },
};

export default function CardTipo({
  data,
  onClick,
  index,
  selected,
}: CardTipoProps) {
  const [animete, cicleTitle] = useCycle({ y: 0 }, { y: -80 });
  const { lang, t } = useTranslation();

  useEffect(() => {
    if (selected) cicleTitle();
  }, []);

  return (
    <CardTipoContainer
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={itemVariants}
      selected={selected}
      onClick={() => {
        onClick(data._id);
        cicleTitle();
      }}
      image={data.image}
    >
      <motion.h2 variants={titleVariants} className="label" animate={animete}>
        {lang === "en" ? data.titleEn : data.titlePt}
      </motion.h2>
      <div className="descContainer">
        <motion.p variants={descVariants}>
          {lang === "en" ? data.descEn : data.descPt}
        </motion.p>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.h3
            initial={{
              y: 100,
            }}
            exit={{
              y: 100,
            }}
            animate={{
              y: 0,
            }}
            className="selected"
          >
            {t("common:selecionado")}
          </motion.h3>
        )}
      </AnimatePresence>
    </CardTipoContainer>
  );
}
