import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";
import Providers from "@/components/Providers";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Noorion - Modern Islamic Social Platform",
  description: "Connect with fellow Muslims through faith, knowledge, and community.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-navy text-ivory">
        <Providers>
          <Toaster />
          <Sonner />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Sidebar />
            <main className="lg:ml-64 min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
