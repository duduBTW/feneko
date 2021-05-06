import React from "react";

export function InfoArtista() {
  return (
    <div className="infoArtista">
      <div className="header">
        {" "}
        <img
          src="https://pbs.twimg.com/media/Ew_pEEyVkAMwvQw?format=jpg&name=medium"
          alt=""
        />
        <div className="name">
          <h2>Teste artista</h2>
        </div>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero
        possimus voluptas earum tempore. Assumenda sit sint necessitatibus ipsum
        suscipit.
      </div>
    </div>
  );
}
