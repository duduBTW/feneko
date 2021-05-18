import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderPedidoContainer = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .back {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    cursor: pointer;
    align-items: center;
  }
`;
// style={{
//   display: "flex",
//   gap: 15,
//   marginTop: 30,
//   cursor: "pointer",
//   alignItems: "center",
// }}
