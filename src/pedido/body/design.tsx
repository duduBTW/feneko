import React from "react";
import ItemPedido from "../item";

export default function Design() {
  return (
    <div>
      {" "}
      <ItemPedido
        types={["emotes", "overlay", "alerta"]}
        title="Design"
        type="design"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate provident, tempora aspernatur exercitationem quisquam. Neque sit eaque dignissimos repellendus."
        image="https://pbs.twimg.com/media/E0oFnokUUAUH-hM?format=jpg&name=large"
      />
    </div>
  );
}