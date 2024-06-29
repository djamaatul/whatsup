import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whatsup",
  description: "Chat Sederhana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='max-w-screen-sm mx-auto border-x min-h-screen'>{children}</body>
    </html>
  );
}
