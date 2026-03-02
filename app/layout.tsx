import "./globals.css";
import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Niv Design | Mateus Franco",
  description: "Desenvolvimento Front-End de alta performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
