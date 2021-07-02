import ImageChanger from "@/shared/ImageChanger";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ExemplosArte from "../selecionarArtista/item/ExemplosArte";
import { ArtistaContainer } from "./styles";
import { Blob } from "react-blob";

import { BiArrowBack } from "react-icons/bi";
import { ArtistaModelo, Tags } from "../data";
import { useRouter } from "next/dist/client/router";
import useTranslation from "next-translate/useTranslation";

export default function Artista({ artista }: { artista: any }) {
  const [selected, setSelected] = useState(0);
  console.log(`artista?.art`, artista?.art);

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
        <HeaderArtista {...artista.artist} typeData={artista.typeData} />
        <div className="port">
          <div className="main">
            <ImageChanger def={selected} images={artista?.art} />
          </div>
          <div className="all">
            <ExemplosArte
              setOpen={(i: number) => setSelected(i)}
              artes={artista?.art}
              index={1}
            />
          </div>
        </div>
      </ArtistaContainer>
    </>
  );
}

interface InfoArtistaProps {
  name: string;
  descEn: string;
  descPt: string;
  profilePic: string;
  types: string[];
  typeData: any;
}

export function HeaderArtista({
  name,
  descEn,
  descPt,
  profilePic,
  typeData,
}: InfoArtistaProps) {
  const history = useRouter();
  const { lang, t } = useTranslation();

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
            whileTap={{
              scale: 0.7,
            }}
          >
            <BiArrowBack size="22px" />
          </motion.div>
        </div>

        <h1>{name}</h1>
      </div>
      <div className="desc">{lang === "en" ? descEn : descPt}</div>
      <div className="habilidades">
        <div className="title">{t("common:Habilidades")}</div>
        <div className="list">
          {typeData?.map((item: any) => (
            <motion.div
              animate={{ background: "transparent" }}
              whileHover={{ background: "rgba(0, 0, 0, 0.1)" }}
              className="item"
            >
              {lang === "en" ? item.tituloEn : item.tituloPt}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
