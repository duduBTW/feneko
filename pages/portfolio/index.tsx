import { GetStaticProps } from "next";
import Portfolio, { PortItemsModel } from "@/src/portfolio";

export default function PortfolioPage({
  portItems,
}: {
  portItems: PortItemsModel[];
}) {
  return <Portfolio portItems={portItems} />;
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
