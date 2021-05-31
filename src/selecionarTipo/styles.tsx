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

    .selectMore {
      font-size: 22px;
      color: #565656;
    }
  }
`;

export const Button = styled(motion.button)`
  /* font-family: "Rubik", sans-serif; */
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.palette.main};
  padding: 15px 40px;
  width: 300px;
  color: white;
  font-size: 22px;
  letter-spacing: 4px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
`;

export const ButtonOutline = styled(motion.button)`
  /* font-family: "Rubik", sans-serif; */
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.palette.main};
  color: ${(props) => props.theme.palette.main};
  background: white;
  padding: 15px 40px;
  width: 300px;
  font-size: 22px;
  letter-spacing: 4px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
`;
