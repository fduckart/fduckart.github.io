import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
          <link href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise|Bungee+Shade|Cinzel|EB+Garamond|Playfair+Display+SC|Special+Elite|Monoton|Cormorant+SC|Nosifer|Faster+One|Tangerine" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Megrim|Spirax&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
