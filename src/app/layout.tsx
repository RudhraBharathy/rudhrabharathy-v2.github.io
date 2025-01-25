"use client";

import { ReactNode } from "react";
import Loading from "@/components/Loading";
import type { Metadata } from "next";
import localFont from "next/font/local";
import useLoadingProgress from "@/hooks/useLoadingProgress";
import "./globals.css";

const DancingScript = localFont({
  src: "./fonts/DancingScript-Variable.woff2",
  variable: "--font-dancingscript",
  weight: "100 200 300 400",
});

const Nunito = localFont({
  src: "./fonts/Nunito-Variable.woff2",
  variable: "--font-nunito",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const { progress, loadingComplete } = useLoadingProgress();

  return (
    <html lang="en">
      <body
        className={`${Nunito.variable} ${DancingScript.variable} antialiased`}
      >
        {!loadingComplete ? <Loading progress={progress} /> : children}
      </body>
    </html>
  );
}
