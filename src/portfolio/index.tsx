import { motion, Variants } from "framer-motion";
import { GetStaticProps } from "next";
import { Title } from "pages/styles";
import React from "react";
import { PortfolioContainer } from "./styles";

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

export default function Portfolio({
  portItems,
}: {
  portItems: PortItemsModel[];
}) {
  return (
    <PortfolioContainer>
      <Title className="title">Galeria</Title>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="content"
      >
        {portItems.map(({ ratio, imageLiknk }, index) => (
          <motion.div
            key={index}
            className="item"
            variants={item}
            style={{
              gridArea: `span ${ratio.split("/")[1]} / span ${
                ratio.split("/")[0]
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
                Nome Artista
              </motion.div>
              <motion.div
                variants={slashMotion4}
                style={{
                  backgroundImage: `url('${imageLiknk}')`,
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
