import React, { useEffect, useState } from "react";
import ItemPedido from "./item";
import { Modal } from "../shared/Modal";

import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import { ModalPrecoContainer } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

export default function Art() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Preco />
      </Modal>
      <ItemPedido
        openPrecoModal={() => {
          setOpen(true);
        }}
        title="Art"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate provident, tempora aspernatur exercitationem quisquam. Neque sit eaque dignissimos repellendus."
        image="https://pbs.twimg.com/media/EzgDTc8X0AYHaGU?format=jpg&name=4096x4096"
      />
    </div>
  );
}

function Preco() {
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
    <ModalPrecoContainer>
      {/* <div className="slide"> */}
      <h1>vTuber</h1>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
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
