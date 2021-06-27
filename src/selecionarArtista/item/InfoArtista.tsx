import useTranslation from "next-translate/useTranslation";
import React from "react";

interface InfoArtistaProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  artista: any;
}

export function InfoArtista({ artista, onClick }: InfoArtistaProps) {
  const { lang } = useTranslation();
  return (
    <div onClick={onClick} className="infoArtista">
      <div className="header">
        <img
          src={artista?.profilePic}
          alt={`foto de perfil ${artista?.name}`}
        />
        <div className="name">
          <h2>{artista?.name}</h2>
        </div>
      </div>
      <div className="desc">
        {lang === "pt-BR" ? artista?.descPt : artista?.descEn}
      </div>
    </div>
  );
}
