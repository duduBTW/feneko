import { useRouter } from "next/dist/client/router";
import React from "react";
import Bread from "./Bread";
import { NavContainer } from "./styles";

export default function NavBar() {
  const history = useRouter();
  const lisks = [
    {
      link: "/selecionarTipo",
      name: "Fazer Pedido",
    },
    {
      link: "/portfolio",
      name: "Galeria",
    },
    {
      link: "/artista",
      name: "Artistas",
    },
  ];

  const redirect = (link: string) => history.push(link);

  return (
    <NavContainer>
      <div className="content">
        <div className="items">
          <div className="title">Feneko App</div>
          <Bread />
        </div>
        <div className="items">
          {lisks.map((link) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => redirect(link.link)}
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </NavContainer>
  );
}
