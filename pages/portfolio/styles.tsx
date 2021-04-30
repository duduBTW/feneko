import { motion } from "framer-motion";
import styled from "styled-components";

export const PortfolioContainer = styled(motion.div)`
  max-width: 1366px;
  margin: 0px auto;

  .content {
    display: grid;

    grid-template-columns: repeat(4, minmax(auto, 28.5rem));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
    gap: 5%;

    .item {
      height: auto;
      box-sizing: border-box;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      &::before {
        content: "";
        /* height: 100px; */
        padding-top: 45%; // This is rl cool
        display: block;
      }
    }
  }
`;
