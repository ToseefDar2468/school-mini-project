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
    default: "Meridian Academy | Academic Excellence for Every Learner",
    template: "%s | Meridian Academy",
  },
  description:
    "Meridian Academy is a modern school focused on academic excellence, character development, and a supportive learning environment.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Meridian Academy | Academic Excellence for Every Learner",
    description:
      "A modern school committed to strong academics, inspired teaching, and student growth.",
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
