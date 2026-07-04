import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Purna Sai | Data Analyst & BI Engineer",
  description: "Portfolio of Purna Sai, a Data Analyst and Business Intelligence Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans font-light antialiased bg-black text-white/90 selection:bg-white/20`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
