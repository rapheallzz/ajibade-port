import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — Frontend Developer",
  description:
    "Frontend developer crafting exceptional digital experiences. Specialising in React, Next.js, TypeScript, and motion design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
