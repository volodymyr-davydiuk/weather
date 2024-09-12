import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "Weather",
  description: "Actual weather in your city.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
