import React from "react";

type Props = {
  children: any;
};

export default function H1({ children }: Props) {
  return (
    <h2
      style={{
        fontSize: "1.5rem",
        marginBottom: 20,
        marginTop: 40,
        textAlign: "left",
      }}
    >
      {children}
    </h2>
  );
}
