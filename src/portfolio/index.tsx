import dynamic from "next/dynamic";

import { motion, Variants } from "framer-motion";
import { Title } from "@/src/styles";
import { PortfolioContainer } from "./styles";

import React, { useEffect, useState } from "react";
import { Arte, dataArtista } from "../data";
import { useDispatch } from "react-redux";
import { setArtistModal } from "../redux/actions/globalActions";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import { IFenekoArte } from "../models/art";
import { CircularProgress } from "@material-ui/core";

const MenuItem = dynamic(() => import("@material-ui/core/MenuItem"), {
  ssr: false,
});
const Select = dynamic(() => import("@material-ui/core/Select"), {
  ssr: false,
});

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

export default function Portfolio() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [portItems, setportItems] = useState<null | IFenekoArte[]>();

  const open = (id: string, index: number) => {
    dispatch(setArtistModal([id, index.toString()]));
  };

  useEffect(() => {
    axios.get(`/api/portfolio`).then(({ data }) => setportItems(data));
  }, []);

  return (
    <PortfolioContainer>
      <div className="header">
        {/* <div style={{ maxHeight: 70, width: "300px" }}>
          <Select
            fullWidth
            variant="outlined"
            // value={10}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div> */}
        <Title className="title">{t("common:tituloGaleria")}</Title>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="content"
      >
        {portItems ? (
          portItems.map(
            (
              {
                url,
                artist: nomeArtista,
                _id: idArtista,
                largura,
                altura,
                title,
              },
              index
            ) => (
              <motion.div
                key={idArtista}
                onClick={() => open(nomeArtista, idArtista)}
                className="item"
                variants={item}
                style={{
                  gridArea: `span ${altura} / span ${largura}`,
                  // gridColumn: `span ${ratio.split("/")[0]}`,
                  // gridRow: `span ${ratio.split("/")[1]}`,
                  minHeight: 350 * Number(altura),
                  maxHeight: 400 * Number(altura),
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
                    {title}
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
                      background: "rgba(246, 107, 65, 0.75)",
                      clipPath: "polygon(77% 0, 100% 100%, 0 100%, 0 0)",
                      scale: 1.8,
                    }}
                    className="itemBack"
                  ></motion.div>
                </motion.div>
              </motion.div>
            )
          )
        ) : (
          <CircularProgress />
        )}
      </motion.div>
    </PortfolioContainer>
  );
}
