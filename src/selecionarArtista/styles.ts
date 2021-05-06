import styled from "styled-components";

export const CardArtistaContainer = styled.div`
  padding: 30px;
  border: 1px solid #bebebe;
  margin: 50px 0px;

  display: flex;
  gap: 30px;

  border-radius: 5px;

  .infoArtista {
    flex: 466;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      align-items: center;
      gap: 30px;
      padding-bottom: 30px;
    }

    h2 {
      font-size: 30px;
    }

    .desc {
      font-size: 18px;
      color: #131313;
      line-height: 28px;
    }
    img {
      height: 100px;
      width: 100px;

      object-fit: cover;
      object-position: top;
      border-radius: 50px;

      border: 1px solid #bebebe;
    }
  }

  .exemplosArte {
    flex: 626;
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    overflow-x: auto;
    position: relative;
    padding-bottom: 30px;
    scroll-behavior: smooth;

    .arts {
      width: fit-content;
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      gap: 30px;
      padding: 0px 30px;

      img {
        max-height: 300px;
      }
    }

    .change {
      position: sticky;
      z-index: 2;
      bottom: 0px;
      top: 0px;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 15px;
      background: white;

      font-size: 24px;

      :hover {
        background: lightgrey;
      }
    }

    .right {
      right: 0px;
    }

    .left {
      left: 0px;
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

interface CheckBoxProps {
  checked: boolean;
}

export const CheckBox = styled.div<CheckBoxProps>`
  flex: 137;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .check {
    height: 30px;
    width: 30px;

    border: 2px solid ${(props) => props.theme.palette.main};
    border-radius: 5px;

    background: ${(props) =>
      props.checked ? props.theme.palette.main : "white"};
  }

  .text {
    font-size: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.palette.main};
  }
`;
