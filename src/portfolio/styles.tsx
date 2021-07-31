import { motion } from "framer-motion";
import styled from "styled-components";

export const PortfolioContainer = styled(motion.div)`
  max-width: 1366px;
  margin: 0px auto;

  .header {
    padding: 30px 0px;
    display: flex;

    .title {
      flex: 1;
    }
  }

  .title {
    padding: 30px 0px 0px 0px;

    @media only screen and (max-width: 1400px) {
      padding: 30px 50px 0px 50px;
    }

    @media only screen and (max-width: 600px) {
      padding: 30px 30px 0px 30px;
    }
  }

  .content {
    display: grid;

    padding: 30px 0px;

    grid-template-columns: repeat(3, 30%);
    /* grid-auto-rows: 1fr; */
    grid-auto-flow: dense;
    gap: 60px;

    @media only screen and (max-width: 1400px) {
      padding: 30px 50px;
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 50%);
      gap: 30px;
      padding: 30px 50px;
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 50%);
      padding: 30px 30px;
      gap: 15px;
    }

    .item {
      height: auto;
      box-sizing: border-box;
      overflow: hidden;

      position: relative;
      cursor: pointer;

      border: 1px solid ${(props) => props.theme.palette.second};

      .itemBack {
        height: auto;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .artist {
          position: absolute;
          top: 50%;
          left: 30px;
          right: 30px;

          z-index: 2;

          color: white;
          font-size: clamp(26px, 4vw, 44px);
          text-align: center;

          font-weight: bold;

          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

          /* transform: translateY(-50%); */
        }
      }

      &::before {
        content: "";
        padding-top: 100%; // This is rl cool
        display: block;
      }
    }
  }
`;
