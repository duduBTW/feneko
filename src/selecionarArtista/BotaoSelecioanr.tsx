import React, { useState } from "react";
import { CheckBox } from "./styles";

export default function BotaoSelecionar() {
  const [checked, setChecked] = useState(false);
  return (
    <CheckBox
      checked={checked}
      onClick={() => setChecked((c) => !c)}
      className="botaoSelecionar"
    >
      <div className="check"></div>
      <div className="text">Selecionar</div>
    </CheckBox>
  );
}
