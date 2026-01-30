import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Advance Health | Healthcare Innovation Ideathon",
  description: "Join the premier Ideathon for medicine and healthcare innovation. Build solutions that transform patient care and medical research.",
  keywords: ["Ideathon", "healthcare", "medicine", "innovation", "health tech", "medical AI"],
  openGraph: {
    title: "Advance Health | Healthcare Innovation Ideathon",
    description: "Join the premier Ideathon for medicine and healthcare innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
