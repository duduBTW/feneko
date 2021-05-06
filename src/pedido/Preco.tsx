import React, { useEffect, useState } from "react";
import Slider from "rc-slider/lib/Slider";
import { ModalPrecoContainer } from "./styles";
import { AnimatePresence, motion, Variants } from "framer-motion";
import "rc-slider/assets/index.css";

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

export function Preco({ onClose }: { onClose: () => void }) {
  const [slideValue, setslideValue] = useState<number>(300);
  const [image, setImgage] = useState<string>(
    "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/65734_855766.png"
  );

  useEffect(() => {
    let imgLink = image;
    if (slideValue < 500) {
      imgLink =
        "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/65734_855766.png";
    } else if (slideValue < 700) {
      imgLink =
        "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/277588_359286.png";
    } else if (slideValue > 900) {
      imgLink =
        "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/732168_990796.png";
    }

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
        <span onClick={onClose}>Close</span>
        <h1>vTuber</h1>
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
        <label className="lab">Preço</label>
        <label className="price">1000</label>
        <Slider
          onChange={(data) => {
            setslideValue(data);
          }}
          vertical
          min={300}
          max={1000}
          defaultValue={slideValue}
        />
        <label className="price">300</label>
      </div>
      {/* </div> */}
    </ModalPrecoContainer>
  );
}
