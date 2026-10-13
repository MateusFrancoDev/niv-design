import "./globals.css";
import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "𝙉𝙄𝙑 𝘿𝙚𝙨𝙞𝙜𝙣 • 𝘼𝙜ê𝙣𝙘𝙞𝙖 𝘿𝙞𝙜𝙞𝙩𝙖𝙡",
  description: "Desenvolvimento Front-End de alta performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={spaceGrotesk.variable}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
