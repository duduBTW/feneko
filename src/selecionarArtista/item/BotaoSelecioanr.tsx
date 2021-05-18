import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CheckBox } from "../styles";

export default function BotaoSelecionar({
  checked,
  id,
}: {
  checked: [number[], React.Dispatch<React.SetStateAction<number[]>>];
  id: number;
}) {
  const [selecionado, setChecked] = checked;

  const changeCheched = () => {
    if (Boolean(selecionado.find((selec) => selec === id))) {
      const newValue = selecionado.filter((selec) => selec !== id);
      setChecked(newValue);
      return;
    }
    setChecked((c) => [...c, id]);
  };

  return (
    <CheckBox
      checked={Boolean(selecionado.find((selec) => selec === id))}
      onClick={changeCheched}
      className="botaoSelecionar"
    >
      <div className="check"></div>
      {/* <AnimatePresence exitBeforeEnter={true}>
        <motion.div
          exit={{ scale: 0 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          className="text"
          key={checked.toString()}
        >
          {!checked ? "Selecionar" : "Selecionado"}
        </motion.div>
      </AnimatePresence> */}
    </CheckBox>
  );
}
