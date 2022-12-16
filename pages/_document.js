import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        {/* <title>Take Off</title> */}
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></link>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css" />
      </Head>
      <title>My Portfolio</title>
      <body>
        <Main></Main>
        <NextScript src="../path/to/flowbite/dist/flowbite.js"></NextScript>
        <NextScript src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></NextScript>
      </body>
    </Html>
  );
}
