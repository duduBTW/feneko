import { motion } from "framer-motion";
import styled from "styled-components";

export const SidenavContainer = styled(motion.div)`
  position: fixed;
  z-index: 999;

  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden; /* or auto or scroll */

  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100vh;
  max-width: 100vh;

  .closeIcon {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
export const NavContainer = styled.div`
  height: 60px;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 5;
  .content {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1366px;
    margin: 0px auto;

    @media only screen and (max-width: 1466px) {
      margin: 0px 50px;
    }

    @media only screen and (max-width: 600px) {
      margin: 0px 30px;
    }
  }

  .closeIcon {
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  border-bottom: 1px solid grey;

  .items {
    display: flex;
    gap: 60px;
    font-size: 0.9rem;

    .title {
      display: flex;
      align-items: center;

      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  .itemsPog {
    display: flex;
    gap: 30px;
  }
`;
