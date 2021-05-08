import styled from "styled-components";

interface BreadItemProps {
  active: boolean;
}

export const BreadItem = styled.div<BreadItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  font-size: ${(props) => (props.active ? "1rem" : "0.8rem")};
  color: ${(props) => (props.active ? "black" : "grey")};
  .icon {
    color: ${(props) => props.theme.palette.main};
  }
`;
export const BreadContainer = styled.div`
  display: flex;
  gap: 15px;
  /* max-width: 30vw; */
  overflow-x: auto;
`;
