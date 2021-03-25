import React from "react";

import H1 from "../components/H1";

type Props = {
  number: number;
};

export default function QuickStartPage({ number }: Props) {
  return <H1>Quick Start {number}</H1>;
}
