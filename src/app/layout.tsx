import type { Metadata } from "next";
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
      <body className="font-sequoia"> 
        {children}
      </body>
    </html>
  );
}
