import "./globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Flamengo Page",
  description: "Landing page do Flamengo em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
