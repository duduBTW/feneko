import styled from "styled-components";

export const ButtonBottomContaienr = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding: 10px 20px;
  position: sticky;
  bottom: 0px;
  z-index: 3;
  background: white;

  box-sizing: border-box;

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
