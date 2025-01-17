import Nav from "@/components/sections/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
      <header>
        <Nav />
      </header>
      {children}
      <footer className="flex bg-slate-600 text-white gap-5 text-centre py-3 px-3 "> This is footer </footer>
      </body>
    </html>
  );
}
