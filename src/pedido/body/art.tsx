import { Tags } from "@/src/data";
import React, { useState } from "react";
import ItemPedido from "../item";

export const artTypes: Tags[] = ["arte"];

export default function Art() {
  return (
    <div>
      <ItemPedido
        type="art"
        types={artTypes}
        title="Art"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate provident, tempora aspernatur exercitationem quisquam. Neque sit eaque dignissimos repellendus."
        image="https://pbs.twimg.com/media/EzgDTc8X0AYHaGU?format=jpg&name=4096x4096"
      />
    </div>
  );
}