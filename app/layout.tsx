import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-english",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Delta Wallet",
  description:
    "Delta Wallet is a practical USDT wallet for payments and digital services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}