import { motion } from "framer-motion";
import styled from "styled-components";

export const ItemPedidoContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 50px 0px;
  @media only screen and (max-width: 1200px) {
    justify-content: flex-end;
    padding: 50px 0px;
  }
  border-bottom: 1px dashed lightgrey;
  flex-direction: column-reverse;

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 600px) {
    /* max-width: calc(100vw - 60px); */
  }

  textarea {
    outline: none;
    width: 100%;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    height: 160px;

    /* margin-top: 50px; */
    resize: none;
    border: 1px solid ${(props) => props.theme.palette.secondLigth};
    padding: 30px;
    font-size: 1.2rem;
  }

  justify-content: space-between;

  .artist {
    flex: 1.5;
    @media only screen and (max-width: 1200px) {
      padding-right: 0px;
    }

    /* padding-right: 50%; */

    position: relative;

    .line {
      @media only screen and (max-width: 600px) {
        position: relative;
      }
      position: absolute;
      top: 30px;
      @media only screen and (max-width: 1200px) {
        top: -840px;
      }

      bottom: 30px;
      left: 30px;

      width: 1px;

      background: ${(props) => props.theme.palette.secondLigth};
      z-index: -1;
    }

    h2 {
      font-size: 20px;
      background: white;
      color: ${(props) => props.theme.palette.main};
      position: sticky;
      top: 60px;
      z-index: 3;

      padding: 0px;
      margin: 50px 0px 23px 0px;

      @media only screen and (max-width: 600px) {
        margin: 25px 0px 23px 0px;
      }
    }
  }

  .scroll {
    /* position: sticky; */
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    @media only screen and (max-width: 1200px) {
      position: relative;
    }
    top: 80px;
    height: 100%;

    h2 {
      padding: 0px;
      margin: 0px;
      padding-top: 80px;
      font-size: 42px;

      @media only screen and (max-width: 1200px) {
        padding-top: 0px;
        padding-bottom: 40px;
      }

      letter-spacing: 3px;

      color: ${(props) => props.theme.palette.second};

      width: 100%;
      cursor: pointer;
      :hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .container {
    position: relative;
    padding-left: 30px;

    @media only screen and (max-width: 1200px) {
      padding-bottom: 160px;
      width: 650px;
      min-width: 600px;
    }

    @media only screen and (max-width: 600px) {
      max-width: calc(100vw - 60px);
    }

    .image {
      position: relative;
      z-index: 2;
      /* margin-right: 100px; */
      margin-right: 0px;

      @media only screen and (max-width: 1200px) {
        width: 100%;
        height: 600px;
      }

      height: 400px;
      width: 400px;

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
      @media only screen and (max-width: 600px) {
        /* position: relative; */
      }
      margin: 0px;
      margin-top: 30px;
      padding: 10px 40px;
      background: white;
      border-right: 1px solid ${(props) => props.theme.palette.main};
      color: ${(props) => props.theme.palette.main};

      font-style: normal;
      font-weight: 600;
      font-size: 48px;
    }

    p {
      z-index: 3;
      position: absolute;
      left: 0px;

      @media only screen and (max-width: 1200px) {
        transform: translateX(30%);
        /* top: 500px; */
        max-width: 350px;
        bottom: 70px;
      }
      transform: translateX(-30%);
      max-width: 150px;
      bottom: 0px;

      background: white;
      border: 1px solid ${(props) => props.theme.palette.main};
      padding: 20px;

      font-family: "Helvetica Now Display";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #131313;
    }
  }

  .mobile-header {
    max-width: 500px;

    img {
      max-width: 100%;
      max-height: 300px;
      /* clip-path: polygon(
        40% 0%,
        calc(100%) 0%,
        100% 30%,
        100% 70%,
        calc(100% - 40%) 100%,
        30px 100%,
        0% calc(100%),
        0% 30%
      ); */
    }

    p {
      padding: 10px 0px;
      background: white;
      font-size: 1.2rem;
      line-height: 1.75rem;
    }

    h1 {
      color: ${(props) => props.theme.palette.main};
      font-size: 42px;
      font-weight: 600;
      background: white;
    }
  }
`;

export const AddArtistContainer = styled(motion.div)`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.secondLigth};
  transition: all 0.2s ease-in-out;
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.main};

  /* border-radius: 5px; */
  background: white;
  position: relative;
  overflow: hidden;

  gap: 30px;

  :hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 16px rgba(252, 151, 9, 0.25);
    /* background: #fffcf7; */
  }

  p {
    position: absolute;
    font-size: 0.8rem;
    color: grey;
    max-width: 40%;

    right: 20px;
  }
`;

export const ArtistSelectedContainer = styled.div`
  border: 1px solid ${(props) => props.theme.palette.second};
  transition: all 0.2s ease-in-out;
  height: 120px;
  width: calc(100% - 60px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  margin-bottom: 30px;

  font-size: 22px;
  font-weight: 500;
  background: white;

  .info {
    display: flex;
    gap: 30px;
    align-items: center;

    .title {
      font-size: 1.6rem;
      letter-spacing: 2px;
    }
  }

  .remov {
    cursor: pointer;
    color: #c70000;
    font-size: 0.8rem;
  }

  .pfp {
    height: 70px;
    width: 70px;

    object-fit: cover;
    object-position: top;
    border-radius: 50px;

    border: 1px solid #bebebe;
  }
`;

export const ModalPrecoContainer = styled(motion.div)`
  position: fixed;

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

  .title {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    span {
      color: #930000;
      letter-spacing: 2px;
      cursor: pointer;
    }

    h1 {
      padding: 0px;
      margin: 0px;
      font-style: normal;
      font-weight: 200;
      font-size: 60px;
      letter-spacing: 0.2em;

      color: ${(props) => props.theme.palette.main};
      /* transform: translateX(-100%) translateY(-100%) rotate(90deg); */
    }
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
      :hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
