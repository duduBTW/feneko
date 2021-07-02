import { motion } from "framer-motion";
import styled from "styled-components";

export const SelecionarArtistaContainer = styled.div`
  @media only screen and (max-width: 1024px) {
    padding: 50px 0px;
  }
  @media only screen and (max-width: 700px) {
    margin: 0px;
  }
`;
export const CardArtistaContainer = styled(motion.div)`
  padding: 30px;
  border: 1px solid #bebebe;
  margin: 50px 0px;

  display: flex;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media only screen and (max-width: 1024px) {
    /* flex-direction: column; */

    display: grid;
    grid-template:
      "info button" 1fr
      "art art" 1fr
      / 2fr 1fr;

    .infoArtista {
      grid-area: info;
      /* order: 1; */
    }

    .botaoSelecionar {
      grid-area: button;
      /* order: 2; */
    }

    .exemplosArte {
      grid-area: art;
      /* order: 3; */
    }
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    border: none;
    border-top: 1px solid #bebebe;
    flex-direction: column;
    margin: 30px 0px;
  }
  gap: 30px;

  border-radius: 30px;

  .infoArtista {
    cursor: pointer;
    flex: 466;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      align-items: center;
      gap: 30px;
      padding-bottom: 30px;
    }

    h2 {
      font-size: 30px;
    }

    .desc {
      font-size: 18px;
      color: #131313;
      line-height: 28px;
    }
    img {
      height: 100px;
      width: 100px;

      object-fit: cover;
      object-position: top;
      border-radius: 50px;

      border: 1px solid #bebebe;
    }
  }
`;

interface CheckBoxProps {
  checked: boolean;
}

export const ExemplosArteContaoner = styled.div`
  flex: 626;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding-bottom: 30px;
  scroll-behavior: smooth;
  height: 100%;

  /* width */
  ::-webkit-scrollbar {
    height: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #e6ffec;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .arts {
    width: fit-content;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 30px;
    padding: 0px 30px;

    img {
      cursor: pointer;
      height: 300px;
      max-height: 100%;

      position: relative;
    }
  }

  .change {
    position: sticky;
    z-index: 2;
    bottom: 0px;
    cursor: pointer;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    background: #e6ffec;
    border-radius: 30px;

    font-size: 24px;

    :hover {
      background: lightgrey;
    }
  }

  .right {
    right: 10px;
  }

  .left {
    left: 10px;
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const CheckBox = styled.div<CheckBoxProps>`
  overflow: hidden;
  flex: 137;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .check {
    height: 30px;
    width: 30px;

    border: 2px solid ${(props) => props.theme.palette.main};
    border-radius: 50%;

    background: ${(props) =>
      props.checked ? props.theme.palette.main : "white"};
  }

  .text {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.palette.main};
  }
`;
