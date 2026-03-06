import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Meridian & Co. | Strategic Business Advisory",
    template: "%s | Meridian & Co.",
  },
  description:
    "Meridian & Co. helps organizations modernize operations, unlock growth, and deliver measurable results through strategic advisory and execution.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Meridian & Co. | Strategic Business Advisory",
    description:
      "A modern advisory firm helping leaders align strategy, operations, and execution.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${newsreader.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
