import { motion } from "framer-motion";
import styled from "styled-components";

export const SelecionarTipoContainer = styled.div`
  max-width: 1366px;
  margin: 0px auto;
  padding: 30px 0px 0px 0px;

  @media only screen and (max-width: 1400px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 600px) {
    padding: 30px 30px;
  }
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .cards {
    padding: 30px 0px;
    margin-top: 30px;
    /* min-height: 100%; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    justify-content: center;
    align-content: center;

    align-items: center;
    justify-items: center;

    @media only screen and (max-width: 1290px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 60px;
      margin-top: 30px;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
    position: sticky;
    bottom: 10px;

    .selectMore {
      font-size: 22px;
      color: #565656;
    }
  }
`;

export const Button = styled(motion.button)`
  /* font-family: "Rubik", sans-serif; */

  transition: clip-path 0.2s ease;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.palette.main};
  padding: 10px 40px;
  width: 300px;
  color: white;
  font-size: 22px;
  letter-spacing: 4px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  font-weight: 500;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  clip-path: polygon(
    14px 0%,
    calc(100%) 0%,
    100% 30%,
    100% 70%,
    calc(100% - 14px) 100%,
    0% 100%,
    0% 70%,
    0% 30%
  );
`;

export const ButtonOutline = styled(motion.button)`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.palette.main};
  background: white;
  padding: 10px 40px;
  width: 250px;
  font-size: 22px;
  letter-spacing: 4px;
  background: white;

  clip-path: polygon(
    8px 0%,
    calc(100% - 8px) 0%,
    100% 30%,
    100% 70%,
    calc(100% - 8px) 100%,
    8px 100%,
    0% 70%,
    0% 30%
  );

  position: relative;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`;
