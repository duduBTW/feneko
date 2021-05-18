import ImageChanger from "@/shared/ImageChanger";
import { motion } from "framer-motion";
import React from "react";
import ExemplosArte from "../selecionarArtista/item/ExemplosArte";
import { ArtistaContainer } from "./styles";
import { Blob } from "react-blob";

import { BiArrowBack } from "react-icons/bi";
import { ArtistaModelo, Tags } from "../data";
import { useRouter } from "next/dist/client/router";

export default function Artista({ artista }: { artista: ArtistaModelo }) {
  const habList = ["Arte", "Teste"];

  return (
    <>
      <Blob
        size="60vw"
        style={{
          position: "absolute",
          top: "-30%",
          left: "-10%",
          zIndex: -1,
          backgroundColor: "grey",
          color: "white",
          opacity: 0.03,
          fontSize: "50vh",
        }}
      />
      <ArtistaContainer className="default-container">
        <HeaderArtista {...artista} />
        <div className="port">
          <div className="main">
            <ImageChanger images={artista.artes} />
          </div>
          <div className="all">
            <ExemplosArte artes={artista.artes} index={1} />
          </div>
        </div>
      </ArtistaContainer>
    </>
  );
}

interface InfoArtistaProps {
  name: string;
  desc: string;
  profilePic: string;
  tags: Tags[];
}

export function HeaderArtista({
  name,
  desc,
  profilePic,
  tags,
}: InfoArtistaProps) {
  const history = useRouter();
  return (
    <div className="header">
      <div className="pfp">
        <motion.div
          style={{ backgroundImage: `url('${profilePic}')` }}
          className="img"
        >
          <motion.div className="back" />
        </motion.div>
      </div>
      <div className="name">
        <div onClick={() => history.push("/artista")} className="icon">
          <motion.div
            // animate={{ x: 0 }}
            whileHover={{
              x: -5,
              transition: {
                duration: 0.5,
                yoyo: Infinity,
                // repeatType: "loop",
              },
            }}
          >
            <BiArrowBack size="22px" />
          </motion.div>
        </div>

        <h1>{name}</h1>
      </div>
      <div className="desc">{desc}</div>
      <div className="habilidades">
        <div className="title">Habilidades</div>
        <div className="list">
          {tags.map((item) => (
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
  );
}
