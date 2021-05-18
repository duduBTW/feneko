import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Variants } from "framer-motion";
import { HeaderPedidoContainer } from "./styles";

export const backAnim: Variants = {
  hover: {
    x: -5,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
      // repeatType: "loop",
    },
  },
};

export default function HeaderPedido() {
  const history = useRouter();
  return (
    <HeaderPedidoContainer
      onClick={() => history.push("/selecionarTipo")}
      className="icon"
      whileHover="hover"
    >
      <div className="back">
        <motion.div
          style={{ display: "flex", alignItems: "center" }}
          variants={backAnim}
        >
          <BiArrowBack size="22px" color="#015150" />
        </motion.div>
        <div>Mudar tipos </div>
      </div>
    </HeaderPedidoContainer>
  );
}
