import { Button, ButtonOutline } from "@/src/selecionarTipo/styles";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { ButtonBottomContaienr } from "./styles";

export default function ButtonsBottom({
  onSubmit,
  onCancel,
  nextLabel,
}: {
  onSubmit: () => void;
  onCancel: () => void;
  nextLabel?: string;
}) {
  const history = useRouter();

  return (
    <ButtonBottomContaienr>
      <ButtonOutline
        whileHover={{
          y: -5,
        }}
        whileTap={{
          y: 5,
        }}
        exit={{ x: 300 }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={onCancel}
      >
        Cancelar
      </ButtonOutline>
      <Button
        onClick={onSubmit}
        whileHover={{
          y: -5,
        }}
        whileTap={{
          y: 5,
        }}
        exit={{ x: 300 }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        {nextLabel || "Selecionar"}
      </Button>
    </ButtonBottomContaienr>
  );
}
