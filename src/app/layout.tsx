import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Raleway({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXIS - Soluções Técnicas em 7 dias",
  description: "Axis: Soluções técnicas, de forma simples. Em 7 dias. Sem freelancers, sem agências, sem enrolação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased bg-[#0c0812]`}
      >
        {children}
      </body>
    </html>
  );
}