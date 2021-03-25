import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  title: string;
};

export default function PageTemplate({ children, title }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={title} />
      </head>
      <body>{children}</body>
    </html>
  );
}
