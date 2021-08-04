import React, { useEffect, useState } from "react";
import Slider from "rc-slider/lib/Slider";
import { ModalPrecoContainer } from "../styles";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "rc-slider/assets/index.css";
import { useMediaQuery } from "react-responsive";
import { IFenekoPreco } from "@/src/models/itemPedido";
import useTranslation from "next-translate/useTranslation";

const modalVar: Variants = {
  initial: { scale: 0.8, y: "-50%", x: "-50%" },
  animate: {
    scale: 1,
    y: "-50%",
    x: "-50%",
    transition: { ease: "anticipate", delay: 0.25, duration: 0.3 },
  },
  exit: {
    y: "-40%",
    x: "-40%",
    scale: 0.75,
    opacity: 0.1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};

export function Preco({
  onClose,
  min = 0,
  max = 0,
  title,
  preco,
  value,
}: {
  onClose: () => void;
  min?: number;
  max?: number;
  title: string;
  preco: IFenekoPreco;
  value: number[];
}) {
  const { t, lang } = useTranslation();
  const [slideValue, setslideValue] = useState<number>(value[0]);
  const [image, setImgage] = useState<string>(preco[0].imagem as string);
  const isMobile = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  useEffect(() => {
    let imgLink = image;
    for (let i = 0; i < preco.length; i++) {
      const precoItem = preco[i];

      if (
        // 16 - 10 >= (20 - 10) * 0.71
        // 6 >= 7.1
        slideValue - min <= ((max - min) * Number(precoItem.fim)) / 100 &&
        ((max - min) * Number(precoItem.inicio)) / 100 <= slideValue - min
      ) {
        imgLink = precoItem.imagem as string;
      }
    }
    // if (slideValue < 500) {
    //   imgLink =
    //     "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/65734_855766.png";
    // } else if (slideValue < 700) {
    //   imgLink =
    //     "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/277588_359286.png";
    // } else if (slideValue > 900) {
    //   imgLink =
    //     "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/732168_990796.png";
    // }

    if (imgLink !== image) setImgage(imgLink);
  }, [slideValue]);

  return (
    <ModalPrecoContainer
      initial={"initial"}
      animate={"animate"}
      exit="exit"
      variants={modalVar}
    >
      <div className="title">
        <AiOutlineClose size={32} className="close" onClick={onClose} />
        <h1>{title}</h1>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          exit={{ y: 30 }}
          transition={{ duration: 0.2 }}
          key={image}
          src={image}
        />
      </AnimatePresence>
      <div className="slide">
        <label className="lab"> {t("common:price")}</label>
        <label className="priceLabel">
          {lang === "en" ? "$" : "R$"} {max}
        </label>
        <Slider
          onChange={(data) => {
            setslideValue(data);
          }}
          vertical={!isMobile}
          min={min}
          max={max}
          defaultValue={slideValue}
        />
        <label className="priceLabel">
          {lang === "en" ? "$" : "R$"} {min}
        </label>
      </div>
      {/* </div> */}
    </ModalPrecoContainer>
  );
}
