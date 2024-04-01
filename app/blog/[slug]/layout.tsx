import { Metadata } from "next";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = {};

const layout = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <nav className="max-w-xl mx-auto p-2">
        <Link href="/blog" className="p-2 text-sm">
          Blog
        </Link>
      </nav>
      {props.children}
    </>
  );
};

export default layout;
