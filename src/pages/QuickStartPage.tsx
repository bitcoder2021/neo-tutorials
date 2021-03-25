import React from "react";

import HelloWorld from "../components/HelloWorld";

type Props = {
  number: number;
};

export default function QuickStartPage({ number }: Props) {
  return (
    <>
      <HelloWorld who={`Quick Start ${number}`} />
    </>
  );
}
