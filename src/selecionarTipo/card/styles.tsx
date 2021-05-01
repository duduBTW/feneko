import { motion } from "framer-motion";
import styled, { DefaultTheme } from "styled-components";

interface CardContainerPorps {
  image: string;
  selected: boolean;
}

export const CardTipoContainer = styled(motion.div)<CardContainerPorps>`
  width: 400px;
  height: 400px;

  overflow: hidden;
  cursor: pointer;

  border-radius: 30px;

  filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));

  background: ${(props) =>
    props.selected
      ? `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 63.02%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url(${props.image});`
      : `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 63.02%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url(${props.image});`};

  :hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url(${(props) => props.image});

    background-size: cover;
    background-repeat: no-repeat;
  }

  background-size: cover;
  background-repeat: no-repeat;

  border: 1px solid ${(props) => props.theme.palette.main};
  position: relative;
  box-sizing: border-box;
  border-radius: 30px;

  .label {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;

    text-align: center;
    color: white;

    font-size: 40px;
    letter-spacing: 5px;
  }

  .selected {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;

    text-align: center;
    color: ${(props) => props.theme.palette.second};

    font-size: 30px;
    letter-spacing: 5px;
  }

  .descContainer {
    overflow: hidden;
    color: white;
    font-size: 16px;
    line-height: 26px;

    position: absolute;
    top: 50%;
    left: 30px;
    right: 30px;
    transform: translateY(-50%);
  }
`;