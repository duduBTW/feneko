import { motion } from "framer-motion";
import React from "react";
import { AddArtist } from "./AddArtist";
import { ItemPedidoContainer } from "./styles";

interface ItemPedidoProps {
  title: string;
  image: string;
  desc: string;
  additionalInfo?: JSX.Element;
}

export default function ItemPedido({
  title,
  image,
  desc,
  additionalInfo
}: ItemPedidoProps) {
  return (
    <ItemPedidoContainer className="default-container">
      <div className="artist">
        <h2>Artista</h2>
        <AddArtist />
        <div className="line"> </div>
      </div>
      <div className="scroll">
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="image">
            <div
              className="background"
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
            <div className="internal"></div>
          </div>
          <motion.p>{desc}</motion.p>
        </div>
        {additionalInfo}
      </div>
    </ItemPedidoContainer>
  );
}
