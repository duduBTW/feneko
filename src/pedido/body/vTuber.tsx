import React, { useState } from "react";
import ItemPedido from "../item";
import { Modal } from "../../shared/Modal";
import { Preco } from "./Preco";
import { Tags } from "@/src/data";

export const vTuberTypes: Tags[] = ["animador", "modelo"];

export default function Vtuber() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Modal open={open}>
        <Preco onClose={onClose} />
      </Modal> */}
      <ItemPedido
        types={vTuberTypes}
        title="vTuber"
        type="vtuber"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate provident, tempora aspernatur exercitationem quisquam."
        image="https://pbs.twimg.com/media/E0nea50VgAAB2d_?format=jpg&name=medium"
        additionalInfo={
          <h2
            className="price"
            // style={{ width: "100%", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          >
            R$ 100
          </h2>
        }
      />
    </div>
  );
}
