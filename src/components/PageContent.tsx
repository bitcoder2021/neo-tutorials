import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
};

export default function PageContent({ children }: Props) {
  return <div>{children}</div>;
}
