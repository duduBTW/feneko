import ImageChanger from "@/shared/ImageChanger";
import { motion } from "framer-motion";
import React from "react";
import ExemplosArte from "../selecionarArtista/item/ExemplosArte";
import { ArtistaContainer } from "./styles";

import { BiArrowBack } from "react-icons/bi";

export default function Artista() {
  const habList = ["Arte", "Teste"];
  return (
    <ArtistaContainer className="default-container">
      <div className="header">
        <div className="pfp">
          <motion.div className="img">
            <motion.div className="back" />
          </motion.div>
        </div>
        <div className="name">
          <BiArrowBack size="22px" className="icon" />
          <h1>Teste artista</h1>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus
          optio deleniti molestiae iusto maiores dolorem nisi atque sed ullam.
        </div>
        <div className="habilidades">
          <div className="title">Habilidades</div>
          <div className="list">
            {habList.map((item) => (
              <motion.div
                animate={{ background: "transparent" }}
                whileHover={{ background: "rgba(0, 0, 0, 0.1)" }}
                className="item"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="port">
        <div className="main">
          <ImageChanger
            images={[
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/Ez0LzvAVoAErSp1?format=png&name=900x900",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/EzKF3KdVEAs75TU?format=png&name=900x900",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/EySHTGJVoAAAV7L?format=jpg&name=large",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/Ev2fhghVIAM85r8?format=jpg&name=medium",
              },
            ]}
          />
        </div>
        <div className="all">
          <ExemplosArte index={1} />
        </div>
      </div>
    </ArtistaContainer>
  );
}
