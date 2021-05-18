import styled from "styled-components";

export const ArtistaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 60px;
  @media only screen and (max-width: 1024px) {
    margin-top: 50px;
    gap: 50px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    gap: 30px;
  }

  .header {
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    grid-template:
      "pfp name habilidades" 30px
      "pfp desc habilidades" 2fr
      / 182px 2fr 1fr;

    @media only screen and (max-width: 1024px) {
      grid-column-gap: 25px;
      grid-row-gap: 25px;

      grid-template:
        "pfp name " 30px
        "pfp desc" 1fr
        "habilidades habilidades" auto
        / 182px 1fr;
    }

    @media only screen and (max-width: 600px) {
      grid-template:
        "name name " 30px
        "pfp habilidades" 1fr
        "desc desc" auto
        / 1fr 2fr;
    }

    .pfp {
      grid-area: pfp;
      justify-self: end;

      .img {
        position: relative;
        border: 1px solid ${(props) => props.theme.palette.main};
        width: calc(182px - 10px);
        height: calc(182px - 10px);

        /* @media only screen and (max-width: 600px) {
          width: calc(100px - 10px);
          height: calc(100px - 10px);
        } */
        background: url("https://pbs.twimg.com/media/Ew_pEEyVkAMwvQw?format=jpg&name=medium");
        background-size: cover;

        .back {
          position: absolute;
          top: -1px;
          bottom: -10px;
          left: -10px;
          right: 10px;
          background: ${(props) => props.theme.palette.main};
          z-index: -1;
        }
      }
    }

    .name {
      display: flex;
      gap: 15px;
      align-items: center;
      width: 100%;
      grid-area: name;
      /* @media only screen and (max-width: 600px) {
        justify-content: space-between;
      } */
      h1 {
        @media only screen and (max-width: 600px) {
          font-size: 18px;
        }
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 0.1em;
      }

      .icon {
        width: 22px;
        color: ${(props) => props.theme.palette.main};
        cursor: pointer;
      }
      @media only screen and (max-width: 600px) {
        align-self: center;
      }
    }

    .desc {
      font-size: 18px;
      line-height: 167%;

      @media only screen and (max-width: 1024px) {
        align-self: flex-start;
      }
      grid-area: desc;
    }

    .habilidades {
      .title {
        font-size: 22px;
        color: ${(props) => props.theme.palette.main};

        @media only screen and (max-width: 600px) {
          font-size: 16px;
        }
      }
      grid-area: habilidades;

      @media only screen and (max-width: 1024px) {
        margin-top: 20px;
      }

      @media only screen and (max-width: 600px) {
        margin-top: 0px;
      }

      .list {
        @media only screen and (max-width: 600px) {
          padding-top: 15px;
          gap: 15px;
        }
        padding-top: 28px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;

        .item {
          cursor: pointer;
          border: 1px solid ${(props) => props.theme.palette.second};
          font-weight: 500;
          padding: 5px 20px;
          text-align: center;
          border-radius: 20px;
        }
      }
    }
  }

  .port {
    border: 1px solid ${(props) => props.theme.palette.main};
    display: flex;
    flex-direction: column;

    gap: 40px;
    .main {
      padding-top: 40px;
      height: calc(75vh - 2px - 90px);
      filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));
    }

    .all {
      height: calc(25vh - 1px - 90px);
      padding-bottom: 40px;
    }
  }
`;
