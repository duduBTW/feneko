import styled from "styled-components";

export const ModalBackDrop = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 98;
`;
