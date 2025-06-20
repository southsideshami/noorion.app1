import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noorion",
  description: "A modern Islamic social app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="w-full p-4 bg-navy text-ivory">
            <h1 className="text-2xl">Noorion</h1>
          </header>
          <div className="w-full text-center p-2 bg-gold text-navy">
            This is a prototype preview of Noorion.
          </div>
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
