import React from "react";
import { GrFormNext } from "react-icons/gr";

export default function ExemplosArte({ index }: { index: number }) {
  return (
    <div className="exemplosArte" id={`exemplosArte-${index}`}>
      <Change type="left" index={index} />
      <Arts />
      <Change type="right" index={index} />
    </div>
  );
}

function Arts() {
  const images = [
    "https://pbs.twimg.com/media/Ez0LzvAVoAErSp1?format=png&name=900x900",
    "https://pbs.twimg.com/media/EzKF3KdVEAs75TU?format=png&name=900x900",
    "https://pbs.twimg.com/media/EySHTGJVoAAAV7L?format=jpg&name=large",
    "https://pbs.twimg.com/media/Ev2fhghVIAM85r8?format=jpg&name=medium",
  ];
  return (
    <div className="arts" id="arts">
      {images.map((image) => (
        <img src={image} />
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
