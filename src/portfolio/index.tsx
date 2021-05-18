import { motion, Variants } from "framer-motion";
import { Title } from "pages/styles";
import { PortfolioContainer } from "./styles";

import React from "react";
import { Arte } from "../data";
import { useDispatch } from "react-redux";
import { setArtistModal } from "../redux/actions/globalActions";

export interface PortItemsModel {
  ratio: string;
  imageLiknk: string;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  hover: {
    x: 0,
    y: 0,
  },
};

const slashMotion: Variants = {
  tap: {
    rotate: "15deg",
  },
};

const slashMotion3: Variants = {
  rest: {
    x: "-200%",
  },

  hover: {
    x: "0%",
    transition: {
      type: "tween",
    },
  },
};

const slashMotion4: Variants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const slashMotion2: Variants = {
  rest: {
    opacity: 0,
    // y: "-100px",
    scale: 1,
  },
  tap: {
    y: "-50%",
  },
  hover: {
    y: "-50%",
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export interface ArteGaleria extends Arte {
  nomeArtista: string;
  idArtista: number;
}

export default function Portfolio({ portItems }: { portItems: ArteGaleria[] }) {
  const dispatch = useDispatch();

  const open = (id: number) => {
    dispatch(setArtistModal(id));
  };

  return (
    <PortfolioContainer>
      <Title className="title">Galeria</Title>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="content"
      >
        {portItems.map(({ ratio, url, nomeArtista, idArtista }) => (
          <motion.div
            key={idArtista}
            onClick={() => open(idArtista)}
            className="item"
            variants={item}
            style={{
              gridArea: `span ${ratio ? ratio.split("/")[1] : 1} / span ${
                ratio ? ratio.split("/")[0] : 1
              }`,
              // gridColumn: `span ${ratio.split("/")[0]}`,
              // gridRow: `span ${ratio.split("/")[1]}`,
              position: "relative",
            }}
          >
            <motion.div
              className="itemBack"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              animate="rest"
              variants={slashMotion}
            >
              <motion.div className="artist" variants={slashMotion2}>
                {nomeArtista}
              </motion.div>
              <motion.div
                variants={slashMotion4}
                style={{
                  backgroundImage: `url('${url}')`,
                }}
                className="itemBack"
              ></motion.div>
              <motion.div
                variants={slashMotion3}
                style={{
                  background: "rgba(1, 81, 80, 0.75)",
                  clipPath: "polygon(77% 0, 100% 100%, 0 100%, 0 0)",
                  scale: 1.8,
                }}
                className="itemBack"
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </PortfolioContainer>
  );
}
