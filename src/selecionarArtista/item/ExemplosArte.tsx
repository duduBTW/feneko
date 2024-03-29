import { Arte } from "@/src/data";
import { IFenekoArte } from "@/src/models/art";
import { motion } from "framer-motion";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import { ExemplosArteContaoner } from "../styles";

export default function ExemplosArte({
  index,
  setOpen,
  artes,
}: {
  index: number;
  setOpen?: any;
  artes: IFenekoArte[];
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      <ExemplosArteContaoner
        className="exemplosArte"
        id={`exemplosArte-${index}`}
      >
        {!isMobile && <Change type="left" index={index} />}
        <Arts arts={artes} setOpen={setOpen} />
        {!isMobile && <Change type="right" index={index} />}
      </ExemplosArteContaoner>
    </>
  );
}

export function Arts({
  setOpen,
  arts,
}: {
  setOpen?: any;
  arts: IFenekoArte[];
}) {
  return (
    <div className="arts" id="arts">
      {arts.map((image, index) => (
        <motion.img
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(image._id);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          src={image.miniature}
          alt={image.title}
        />
      ))}
    </div>
  );
}

function Change({ type, index }: { type: "left" | "right"; index: number }) {
  const scroll = (e: any) => {
    e.stopPropagation();
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
