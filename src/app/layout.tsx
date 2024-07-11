import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bianchini Art",
  description: "Traditional Canvas Paintings with a 3D-Twist using Silk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <style>
          {`
            @font-face {
              font-family: 'BonaNovaSC';
              src: url('/fonts/BonaNovaSC-Regular.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'Sequoia';
              src: url('/fonts/Sequoia.otf') format('opentype');
              font-weight: normal;
              font-style: normal;
            }
          `}
        </style>
      </Head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
