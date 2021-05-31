import styled from "styled-components";

export const ModalArtistContainer = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;
  z-index: 99;

  h1 {
    letter-spacing: 2px;
    color: white;
    position: fixed;
    top: 40px;
    left: 40px;

    font-size: 62px;
    z-index: 9999;
    padding: 10px 10px;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 0px;
    :hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .closeI {
    position: fixed;
    top: 40px;
    right: 40px;
    padding: 10px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
    color: white;

    :hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
