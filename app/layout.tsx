import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pubudini Rathnayake — Portfolio",
  description:
    "Full Stack Developer & AI Enthusiast specializing in NLP and Multilingual Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020817] text-[#e2e8f0] antialiased">
        {children}
      </body>
    </html>
  );
}
