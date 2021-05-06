import React, { useState } from "react";
import ItemPedido from "./item";
import { Modal } from "../shared/Modal";
import { Preco } from "./Preco";

export default function Vtuber() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open}>
        <Preco onClose={onClose} />
      </Modal>{" "}
      <ItemPedido
        title="vTuber"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate provident, tempora aspernatur exercitationem quisquam. Neque sit eaque dignissimos repellendus."
        image="https://pbs.twimg.com/media/E0nea50VgAAB2d_?format=jpg&name=medium"
        additionalInfo={
          <h2 className="price" onClick={() => setOpen(true)}>
            R$ 100
          </h2>
        }
      />
    </div>
  );
}
