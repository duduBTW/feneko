import { IFenekoArte } from "@/src/models/art";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

import React, { useEffect, useRef, useState } from "react";

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const swipeConfidenceThreshold = 10000;
export default function ImageChanger({
  images,
  def,
}: {
  images: IFenekoArte[];
  def?: number | string;
}) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {
    if (def) {
      const index = images.map((item: any) => item._id)?.indexOf(def);
      setPage([index, index > page ? 1000 : -1000]);
    }
  }, [def]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection: number) => {
    console.log(`page`, page);
    setPage([page + newDirection, newDirection]);
  };

  const getContent = (type: IFenekoArte["type"]): JSX.Element => {
    switch (type) {
      case "image":
        return (
          <motion.img
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "100%",
              maxWidth: "100%",
              position: "absolute",
              zIndex: 10,
            }}
            key={page}
            src={images?.[imageIndex]?.url}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="imgInt"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        );
      case "iframe":
        return (
          <motion.iframe
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "90%",
              maxWidth: "100%",
              position: "absolute",
              zIndex: 10,
              minWidth: "70vw",
              minHeight: "60vh",
              padding: 30,
              background: "white",
            }}
            key={page}
            src={images?.[imageIndex]?.url}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="imgInt"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        );

      default:
        return (
          <motion.video
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "90%",
              maxWidth: "90%",
              position: "absolute",
              zIndex: 10,
              boxSizing: "border-box",
            }}
            key={page}
            src={images?.[imageIndex]?.url}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
            onDrag={(e, { offset }) => {
              // setShow(offset.x > 0 ? "rgth" : "left");
              console.log("data", offset.x);
            }}
            onDragEnd={(e, { offset, velocity }) => {
              // setShow(null);
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="imgInt"
            autoPlay
            loop
            // muted
            controls
          >
            <source type="video/mp4" src={images?.[imageIndex]?.url} />
          </motion.video>
        );
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence custom={direction}>
          {getContent(images?.[imageIndex]?.type || "image")}
        </AnimatePresence>
      </div>
    </>
  );
}
