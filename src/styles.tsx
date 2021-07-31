import styled from "styled-components";

export const Title = styled.h1`
  font-size: clamp(26px, 4vw, 72px);
  letter-spacing: 2px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.main};
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: flex-end;
`;
