import React from "react";

type Props = {
  children: any;
  title: string;
};

export default function PageTemplate({ children, title }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="stylesheet" href="static/styles.css" />
      </head>
      <body
        style={{
          backgroundColor: "#242424",
          color: "#fff",
          fontFamily: 'Euclid Circular A,Avenir,Helvetica,Arial,"sans-serif"',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{ backgroundColor: "#101010", marginBottom: 25, padding: 10 }}
        >
          <a
            href="https://ngdenterprise.com/"
            style={{
              color: "rgb(0,229,153)",
              marginRight: 5,
            }}
          >
            ngdenterprise
          </a>{" "}
          <a
            href="index.html"
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            N3 Tutorials Microsite
          </a>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 1024,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
