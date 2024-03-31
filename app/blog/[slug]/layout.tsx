import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Jordi Enric · Blog",
  description: "A blog about design, engineering and other things.",
  openGraph: {
    images: [
      {
        url: "https://www.zenblog.com/api/og?title=best reads&emoji=🌴&url=Jordi Enric",
        href: "https://www.zenblog.com/api/og?title=best reads&emoji=🌴&url=Jordi Enric",
      },
    ],
  },
};
const layout = (props: PropsWithChildren<Props>) => {
  return <>{props.children}</>;
};

export default layout;
