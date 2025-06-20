import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

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
      <body className="font-sans">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            </ThemeProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
