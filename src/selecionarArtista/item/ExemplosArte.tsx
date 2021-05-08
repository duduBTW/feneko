import { motion } from "framer-motion";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { ExemplosArteContaoner } from "../styles";

export default function ExemplosArte({
  index,
  setOpen,
}: {
  index: number;
  setOpen?: any;
}) {
  return (
    <>
      <ExemplosArteContaoner id={`exemplosArte-${index}`}>
        <Change type="left" index={index} />
        <Arts setOpen={setOpen} />
        <Change type="right" index={index} />
      </ExemplosArteContaoner>
    </>
  );
}

export function Arts({ setOpen }: { setOpen?: any }) {
  const images = [
    "https://pbs.twimg.com/media/Ez0LzvAVoAErSp1?format=png&name=900x900",
    "https://pbs.twimg.com/media/EzKF3KdVEAs75TU?format=png&name=900x900",
    "https://pbs.twimg.com/media/EySHTGJVoAAAV7L?format=jpg&name=large",
    "https://pbs.twimg.com/media/Ev2fhghVIAM85r8?format=jpg&name=medium",
  ];
  return (
    <div className="arts" id="arts">
      {images.map((image) => (
        <motion.img
          onClick={() => setOpen && setOpen(true)}
          whileTap={{ scale: 0.9 }}
          src={image}
        />
      ))}
    </div>
  );
}

function Change({ type, index }: { type: "left" | "right"; index: number }) {
  const scroll = () => {
    var arts = document.getElementById(`exemplosArte-${index}`);

    console.log(`arts`, arts);
    if (arts && type === "left") arts.scrollLeft -= 350;
    if (arts && type === "right") arts.scrollLeft += 350;
  };

  return (
    <div onClick={scroll} className={`change ${type}`}>
      <GrFormNext />
    </div>
  );
}
