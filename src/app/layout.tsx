import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { WorkSelector } from "@/components/WorkSelector";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manu — Rigging & Digital Animation",
    template: "%s | Manu",
  },
  description:
    "Portfolio of Manu — senior at UT Dallas specializing in character rigging and digital animation.",
  openGraph: {
    title: "Manu — Rigging & Digital Animation",
    description:
      "Portfolio showcasing character rigs, technical animation, and digital artistry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="grain font-body antialiased">
        <main className="min-h-screen pb-20">{children}</main>
        <WorkSelector />
      </body>
    </html>
  );
}
