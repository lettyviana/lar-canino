import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Contact } from "./components/Contact";
import "@/app/assets/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lar Canino - encontre seu próximo amigocão",
  description:
    "No Lar Canino, você encontra vários cãezinhos que estão em busca de um lar amoroso.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        {children}
        <Contact />
      </body>
    </html>
  );
}
