import { Title } from "pages/styles";
import React from "react";
import CardArtista from "./CardArtista";

export default function SelecionarArtista() {
  const artists = [1, 2, 3];
  return (
    <div className="default-container">
      <Title style={{ textAlign: "end" }}>Artistas</Title>
      {artists.map((artist, index) => (
        <CardArtista index={index} key={index} />
      ))}
    </div>
  );
}
