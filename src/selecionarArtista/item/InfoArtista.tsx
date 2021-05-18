import React from "react";

interface InfoArtistaProps {
  name: string;
  desc: string;
  profilePic: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function InfoArtista({
  name,
  desc,
  profilePic,
  onClick,
}: InfoArtistaProps) {
  return (
    <div onClick={onClick} className="infoArtista">
      <div className="header">
        <img src={profilePic} alt={`foto de perfil ${name}`} />
        <div className="name">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
}
