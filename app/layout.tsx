import type { Metadata } from "next";
import { Inter, Parisienne } from "next/font/google";
import "@/app/assets/styles/globals.scss";
import { Contact } from "./components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const logo_font = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Contact />
      </body>
    </html>
  );
}
