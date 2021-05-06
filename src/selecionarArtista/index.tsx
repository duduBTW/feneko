import { Title } from "pages/styles";
import React, { useCallback, useEffect, useState } from "react";
import CardArtista from "./item";

import ImageChanger from "@/shared/ImageChanger";
import { Modal } from "@/shared/Modal";
import { SelecionarArtistaContainer } from "./styles";

export default function SelecionarArtista() {
  const [open, setOpen] = useState(false);
  const artists = [1, 2, 3];

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <SelecionarArtistaContainer className="default-container">
      {/* 
        TODO
        MAKE THIS GLOBAL
      */}
      <Modal open={open}>
        <div className="imageModal">
          <ImageChanger
            images={[
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/Ez0LzvAVoAErSp1?format=png&name=900x900",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/EzKF3KdVEAs75TU?format=png&name=900x900",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/EySHTGJVoAAAV7L?format=jpg&name=large",
              },
              {
                type: "image",
                url:
                  "https://pbs.twimg.com/media/Ev2fhghVIAM85r8?format=jpg&name=medium",
              },
            ]}
          />
        </div>
      </Modal>
      <Title style={{ textAlign: "end" }}>Artistas</Title>
      {artists.map((artist, index) => (
        <CardArtista setOpen={setOpen} index={index} key={index} />
      ))}
    </SelecionarArtistaContainer>
  );
}
