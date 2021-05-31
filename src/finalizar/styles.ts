import styled from "styled-components";

export const FinalizarContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  gap: 60px;
  .info {
    flex: 1;
    border-left: 1px dashed lightgrey;
  }

  .finish {
    flex: 2;
    @media only screen and (max-width: 1200px) {
      flex: 1;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 45px;
    .soc {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      gap: 36px;
      input {
        flex: 1;
        width: 100%;
      }
    }
    textarea,
    input {
      outline: none;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      font-size: 18px;
      border: 1px solid ${(props) => props.theme.palette.second};
      border-radius: 10px;
      resize: vertical;
    }
  }

  .input {
    position: relative;
    input {
      max-width: 100%;
    }
    label {
      position: absolute;
      top: -20px;
      left: 10px;
      padding: 10px;
      background: white;
      font-size: 14px;
      font-family: "Rubik", sans-serif;
      letter-spacing: 2px;
      pointer-events: none;

      color: ${(props) => props.theme.palette.main};
    }
  }

  .order-item {
    border-bottom: 1px dashed lightgrey;
    padding: 30px 60px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    .desc {
      color: #222222;
      font-size: 20px;

      span {
        margin-right: 15px;
        border: 1px solid ${(props) => props.theme.palette.second};
        font-weight: 500;
        padding: 5px 20px;
        text-align: center;
        border-radius: 20px;
        font-size: 14px;
      }
    }

    h2 {
      color: ${(props) => props.theme.palette.main};
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;
