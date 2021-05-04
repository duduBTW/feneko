import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalBackDrop } from "./styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export function Modal({ open, onClose, children }: ModalProps) {
  return (
    <>
      {open && <ModalBackDrop />}
      <AnimatePresence>{open && <div>{children}</div>}</AnimatePresence>
    </>
  );
}
