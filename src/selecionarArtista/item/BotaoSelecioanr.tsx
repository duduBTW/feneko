import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CheckBox } from "../styles";

export default function BotaoSelecionar({
  checked,
}: // changeCheched,
{
  checked: boolean;
  // changeCheched: () => {};
}) {
  return (
    <CheckBox
      checked={checked}
      // onClick={changeCheched}
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
