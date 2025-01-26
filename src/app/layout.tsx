import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Lekton } from "next/font/google";

const lekton = Lekton({
  variable: "--font-lekton",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Anthony Khoshrozeh",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lekton.className}
      >
        <Sidebar>
          {children}
        </Sidebar>
        
      </body>
    </html>
  );
}
