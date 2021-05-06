import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalBackDrop } from "./styles";

interface ModalProps {
  open: boolean;
  children: JSX.Element;
}

export function Modal({ open, children }: ModalProps) {
  return (
    <>
      {open && <ModalBackDrop />}
      <AnimatePresence>{open && <div>{children}</div>}</AnimatePresence>
    </>
  );
}
