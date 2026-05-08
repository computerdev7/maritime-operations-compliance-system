import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maritime operation",
  description: "Build using Next-Postgress-Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
