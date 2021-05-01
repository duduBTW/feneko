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
  height: calc(85vh - 130px);

  .cards {
    margin-top: 30px;
    min-height: 100%;
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  border: none;
  outline: none;
  padding: 0px;

  background: ${(props) => props.theme.palette.main};

  color: white;
  font-size: 18px;
  text-transform: uppercase;

  padding: 15px 70px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
`;
