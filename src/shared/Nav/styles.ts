import styled from "styled-components";

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

  border-bottom: 1px solid grey;

  .items {
    display: flex;
    gap: 60px;
    font-size: 0.9rem;

    .title {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  .itemsPog {
    display: flex;
    gap: 30px;
  }
`;
