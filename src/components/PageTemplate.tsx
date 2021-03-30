import React from "react";

type Props = {
  children: any;
  headerImage?: boolean;
  title: string;
};

export default function PageTemplate({ children, headerImage, title }: Props) {
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
          style={{ backgroundColor: "#101010", padding: 10, paddingLeft: 30 }}
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
            N3 Tutorials
          </a>
        </div>
        {!!headerImage && (
          <img src="./static/n3.jpg" style={{ width: "100%" }} />
        )}
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 25,
            maxWidth: 1280,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
