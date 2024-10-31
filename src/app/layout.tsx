import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A centralized hub for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge("font-sans bg-white text-black antialiased")}>
        {children}
      </body>
    </html>
  );
}
