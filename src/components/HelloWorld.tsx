import React from "react";

type Props = {
  who: string;
};

export default function HelloWorld({ who }: Props) {
  return <p>Hello {who}!</p>;
}
