import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Larissa Oliveira",
  description: "Fullstack portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
