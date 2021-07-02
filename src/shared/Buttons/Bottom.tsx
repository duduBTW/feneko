import { Button, ButtonOutline } from "@/src/selecionarTipo/styles";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { ButtonBottomContaienr } from "./styles";

export default function ButtonsBottom({
  onSubmit,
  onCancel,
  nextLabel,
  backLabel,
  nextType = "button",
}: {
  onSubmit: () => void;
  onCancel: () => void;
  nextLabel?: string;
  nextType?: string;
  backLabel?: string;
}) {
  const { t } = useTranslation();

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
        {backLabel || t("common:cancelar")}
      </ButtonOutline>
      <Button
        onClick={onSubmit}
        whileHover={{
          y: -5,
        }}
        whileTap={{
          y: 5,
        }}
        //@ts-ignore
        type={nextType}
        exit={{ x: 300 }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        {nextLabel || t("common:selecionar")}
      </Button>
    </ButtonBottomContaienr>
  );
}
