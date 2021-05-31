import { Arte } from "@/src/data";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { ExemplosArteContaoner } from "../styles";

export default function ExemplosArte({
  index,
  setOpen,
  artes,
}: {
  index: number;
  setOpen?: any;
  artes: Arte[];
}) {
  return (
    <>
      <ExemplosArteContaoner
        className="exemplosArte"
        id={`exemplosArte-${index}`}
      >
        <Change type="left" index={index} />
        <Arts arts={artes} setOpen={setOpen} />
        <Change type="right" index={index} />
      </ExemplosArteContaoner>
    </>
  );
}

export function Arts({ setOpen, arts }: { setOpen?: any; arts: Arte[] }) {
  return (
    <div className="arts" id="arts">
      {arts.map((image, index) => (
        <motion.img
          key={index}
          onClick={() => setOpen(index)}
          whileTap={{ scale: 0.9 }}
          src={image.url}
        />
      ))}
    </div>
  );
}

function Change({ type, index }: { type: "left" | "right"; index: number }) {
  const scroll = () => {
    var arts = document.getElementById(`exemplosArte-${index}`);

    if (arts && type === "left") arts.scrollLeft -= 350;
    if (arts && type === "right") arts.scrollLeft += 350;
  };

  return (
    <div onClick={scroll} className={`change ${type}`}>
      <GrFormNext />
    </div>
  );
}
