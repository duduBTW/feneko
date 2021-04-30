import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Title } from "pages/styles";
import React from "react";
import { PortfolioContainer } from "./styles";

interface PortItemsModel {
  ratio: string;
  imageLiknk: string;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Portfolio({
  portItems,
}: {
  portItems: PortItemsModel[];
}) {
  return (
    <PortfolioContainer>
      <Title>Galeria</Title>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="content"
      >
        {portItems.map(({ ratio, imageLiknk }) => (
          <motion.div
            variants={item}
            className="item"
            style={{
              gridArea: `span ${ratio.split("/")[1]} / span ${
                ratio.split("/")[0]
              }`,
              // gridColumn: `span ${ratio.split("/")[0]}`,
              // gridRow: `span ${ratio.split("/")[1]}`,
              backgroundImage: `url('${imageLiknk}')`,
            }}
          />
        ))}
      </motion.div>
    </PortfolioContainer>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const portItems: PortItemsModel[] = [
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DHhgdS0V0AErvXh?format=jpg&name=large",
      ratio: "1/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DUJ2bE9VMAAtOKN?format=jpg&name=small",
      ratio: "1/2",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DUJ2bE_UMAEb1IB?format=jpg&name=large",
      ratio: "2/2",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DGm5BxSV0AUtVEe?format=jpg&name=large",
      ratio: "2/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DHhgdS0V0AErvXh?format=jpg&name=large",
      ratio: "1/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DGm5BxSV0AUtVEe?format=jpg&name=large",
      ratio: "2/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DUJ2bE_UMAEb1IB?format=jpg&name=large",
      ratio: "2/2",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DHhgdS0V0AErvXh?format=jpg&name=large",
      ratio: "1/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DHhgdS0V0AErvXh?format=jpg&name=large",
      ratio: "1/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DHhgdS0V0AErvXh?format=jpg&name=large",
      ratio: "1/1",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DPg991AUQAE5BrB?format=jpg&name=large",
      ratio: "2/2",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DZnI3ACVAAA5QOz?format=jpg&name=medium",
      ratio: "1/2",
    },
    {
      imageLiknk:
        "https://pbs.twimg.com/media/DYV6KaBU0AABGKa?format=jpg&name=medium",
      ratio: "1/2",
    },
  ];

  return {
    props: {
      portItems,
    },
  };
};
