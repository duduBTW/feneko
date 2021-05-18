import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { TipoModel } from "..";
import { CardTipoContainer } from "./styles";

interface CardTipoProps {
  data: TipoModel;
  onClick: (data: number) => void;
  index: number;
  selected: boolean;
}

const itemVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "tween",
      ease: "backOut",
    },
  },
};

const titleVariants: Variants = {
  rest: (selected) => ({ y: selected ? -80 : 0 }),
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
  return (
    <CardTipoContainer
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={itemVariants}
      selected={selected}
      onClick={() => onClick(index)}
      image={data.image}
    >
      <motion.h2 custom={selected} variants={titleVariants} className="label">
        {data.label}
      </motion.h2>
      <div className="descContainer">
        <motion.p variants={descVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          malesuada massa, id suscipit est. Nullam nibh nulla, maximus at mauris
          ac, lacinia malesuada risus
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
            Selecionado
          </motion.h3>
        )}
      </AnimatePresence>
    </CardTipoContainer>
  );
}
