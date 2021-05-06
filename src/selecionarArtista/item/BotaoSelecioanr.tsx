import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CheckBox } from "../styles";

export default function BotaoSelecionar() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      checked={checked}
      onClick={() => setChecked((c) => !c)}
      className="botaoSelecionar"
    >
      <div className="check"></div>
      <AnimatePresence exitBeforeEnter={true}>
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
        {/* {!checked ? (
      
        ) : (
          <motion.div
            exit={{ y: 300 }}
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            className="text"
            key="2"
          >
            Selecionado
          </motion.div>
        )} */}
      </AnimatePresence>
    </CheckBox>
  );
}
