import React from "react";

type Props = {
  children: any;
};

export default function H1({ children }: Props) {
  return (
    <h1 style={{ fontSize: "3rem", margin: 50, textAlign: "center" }}>
      {children}
    </h1>
  );
}
