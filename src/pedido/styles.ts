import { motion } from "framer-motion";
import styled from "styled-components";

export const ItemPedidoContainer = styled.div`
  display: flex;
  padding: 50px 0px;

  border-bottom: 1px dashed lightgrey;

  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  justify-content: space-between;

  .artist {
    flex: 1.5;
    @media only screen and (max-width: 1200px) {
      padding-right: 0px;
    }

    padding-right: 180px;
    position: relative;

    .line {
      position: absolute;
      top: 30px;
      bottom: 30px;
      left: 30px;

      width: 1px;

      background: ${(props) => props.theme.palette.second};
      z-index: -1;
    }

    h2 {
      background: white;
      color: ${(props) => props.theme.palette.main};

      padding: 0px;
      margin: 50px 0px 23px 0px;
    }
  }

  .scroll {
    position: sticky;

    @media only screen and (max-width: 1200px) {
      position: relative;
    }
    top: 30px;
    height: 100%;

    h2 {
      padding-top: 30px;
      font-size: 42px;

      letter-spacing: 3px;
    }
  }

  .container {
    position: relative;
    padding-left: 30px;

    @media only screen and (max-width: 1200px) {
      padding-bottom: 90px;
    }

    .image {
      position: relative;
      z-index: 2;
      margin-right: 100px;

      @media only screen and (max-width: 1200px) {
        width: 100%;
        height: 600px;
      }
      height: 500px;
      width: 500px;

      .internal {
        &::after {
          content: "";
          position: absolute;
          top: 30px;
          bottom: -30px;
          left: -30px;
          right: 30px;

          background-color: ${(props) => props.theme.palette.main};
          z-index: -2;
        }
      }
      .background {
        position: absolute;
        background-size: cover;
        top: 0px;
        bottom: -10px;
        left: -10px;
        right: 0px;
        z-index: 1;
        border: 1px solid ${(props) => props.theme.palette.main};
      }
    }

    h1 {
      z-index: 3;
      top: 30px;
      right: 0px;
      position: absolute;
      margin: 0px;
      margin-top: 30px;
      padding: 10px 60px;
      background: white;
      border-right: 1px solid ${(props) => props.theme.palette.main};
      color: ${(props) => props.theme.palette.main};

      font-style: normal;
      font-weight: 600;
      font-size: 60px;
    }

    p {
      z-index: 3;
      position: absolute;
      left: 0px;

      @media only screen and (max-width: 1200px) {
        transform: translateX(30%);
        top: 500px;
      }
      transform: translateX(-30%);
      border-radius: 5px;
      max-width: 200px;
      /* bottom: 30px; */
      top: 250px;

      background: white;
      border: 1px solid ${(props) => props.theme.palette.main};
      box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
      padding: 20px;

      font-family: "Helvetica Now Display";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #131313;
    }
  }
`;

export const AddArtistContainer = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.second};

  height: 160px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.main};

  border-radius: 5px;
  background: white;

  :hover {
    background: lightgrey;
  }
`;

export const ModalPrecoContainer = styled(motion.div)`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70vw;
  height: 70vh;
  background: white;
  border: 1px solid #015150;
  box-sizing: border-box;
  box-shadow: 0px 0px 26px #015150;
  border-radius: 30px;

  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;

  h1 {
    padding: 0px;
    margin: 0px;
    font-style: normal;
    font-weight: 200;
    font-size: 60px;
    letter-spacing: 0.2em;

    color: ${(props) => props.theme.palette.main};
    transform: rotate(90deg);
  }

  img {
    max-height: 85vh;
  }
  .slide {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;

    .lab {
      color: ${(props) => props.theme.palette.main};
      font-size: 1.1rem;
      font-weight: 300;
    }

    .price {
      color: ${(props) => props.theme.palette.second};
      font-size: 0.8rem;
    }
  }
`;
